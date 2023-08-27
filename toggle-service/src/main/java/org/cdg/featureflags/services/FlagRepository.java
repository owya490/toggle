package org.cdg.featureflags.services;

import org.cdg.featureflags.models.Flag;
import org.cdg.featureflags.models.ObjectRepository;
import org.cdg.featureflags.utils.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class FlagRepository implements ObjectRepository<Flag> {
    private static final String TABLE_NAME = "flag-service-db-v1";

    private static final String ID_KEY = "id";

    private static final String VALUE_KEY = "value";

    private static final String NAME_KEY = "name";
    private static final String DEFAULT_SERVE_KEY = "defaultServe";
    @Autowired
    DynamoDbService dynamoDbService;

    @Override
    public void upsert(Flag flag) {
        // TODO need to fix to accommodate new fields of name and defaultServe
        Map<String, Pair<String, ?>> updateMap = new HashMap<>();
        updateMap.put(NAME_KEY, new Pair<String, String>("S", flag.name));
        updateMap.put(VALUE_KEY, new Pair<String, Boolean>("BOOL", flag.value));
        updateMap.put(DEFAULT_SERVE_KEY, new Pair<String, Boolean>("BOOL", flag.defaultServe));

        dynamoDbService.updateTableItem(TABLE_NAME, ID_KEY, flag.id, updateMap);
    }

    @Override
    public Optional<Flag> get(String id) {
        Optional<Map<String, AttributeValue>> maybeItem = dynamoDbService.getDynamoDBItem(TABLE_NAME, ID_KEY, id);
        if (maybeItem.isPresent()) {
            Map<String, AttributeValue> item = maybeItem.get();
            return Optional.of(new Flag(item.get(ID_KEY).s(), item.get(NAME_KEY).s(), item.get(VALUE_KEY).bool(), item.get(DEFAULT_SERVE_KEY).bool()));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void delete(String id) {
        dynamoDbService.deleteDynamoDBItem(TABLE_NAME, ID_KEY, id);
    }
}
