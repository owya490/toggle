package org.cdg.featureflags.services;

import org.cdg.featureflags.models.ObjectRepository;
import org.cdg.featureflags.models.Toggle;
import org.cdg.featureflags.utils.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class ToggleRepository implements ObjectRepository<Toggle<Boolean>> {
    public static final String TABLE_NAME = "flag-service-db-v1";

    public static final String ID_KEY = "id";

    public static final String VALUE_KEY = "value";

    public static final String NAME_KEY = "name";
    public static final String DEFAULT_SERVE_KEY = "defaultServe";
    @Autowired
    DynamoDbService dynamoDbService;

    @Autowired
    ToggleCache<Boolean> booleanToggleCache;

    @Override
    public void upsert(Toggle<Boolean> toggle) {
        // TODO need to fix to accommodate new fields of name and defaultServe
        Map<String, Pair<String, ?>> updateMap = new HashMap<>();
        updateMap.put(NAME_KEY, new Pair<String, String>("S", toggle.name));
        updateMap.put(VALUE_KEY, new Pair<String, Boolean>("BOOL", toggle.value)); // should encrypt variable stuff as string in dynamo
        updateMap.put(DEFAULT_SERVE_KEY, new Pair<String, Boolean>("BOOL", toggle.defaultServe));

        dynamoDbService.updateTableItem(TABLE_NAME, ID_KEY, toggle.id, updateMap);
        booleanToggleCache.invalidateToggleInCache(toggle.id);
    }

    @Override
    public Optional<Toggle<Boolean>> get(String id) {
        return booleanToggleCache.getFromToggleCache(id);
//        Optional<Map<String, AttributeValue>> maybeItem = dynamoDbService.getDynamoDBItem(TABLE_NAME, ID_KEY, id);
//        if (maybeItem.isPresent()) {
//            Map<String, AttributeValue> item = maybeItem.get();
//            return Optional.of(new Toggle<>(item.get(ID_KEY).s(), item.get(NAME_KEY).s(), item.get(VALUE_KEY).bool(), item.get(DEFAULT_SERVE_KEY).bool()));
//        } else {
//            return Optional.empty();
//        }
    }

    @Override
    public void delete(String id) {
        dynamoDbService.deleteDynamoDBItem(TABLE_NAME, ID_KEY, id);
        booleanToggleCache.invalidateToggleInCache(id);
    }
}
