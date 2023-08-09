package org.cdg.featureflags;

import org.cdg.featureflags.models.Flag;
import org.cdg.featureflags.models.ObjectRepository;
import org.cdg.featureflags.services.DynamoDbService;
import org.springframework.stereotype.Repository;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;

import java.util.Map;
import java.util.Optional;

@Repository
public class FlagRepository implements ObjectRepository<Flag> {
    private static final String TABLE_NAME = "sampleTableName";

    private static final String ID_KEY = "id";

    private static final String VALUE_KEY = "value";
    DynamoDbService dynamoDbService;

    @Override
    public void upsert(Flag flag) {
        dynamoDbService.updateTableItem(TABLE_NAME, ID_KEY, flag.id, VALUE_KEY, flag.value);
    }

    @Override
    public Optional<Flag> get(String id) {
        Optional<Map<String, AttributeValue>> maybeItem = dynamoDbService.getDynamoDBItem(TABLE_NAME, ID_KEY, id);
        if (maybeItem.isPresent()) {
            Map<String, AttributeValue> item = maybeItem.get();
            return Optional.of(new Flag(item.get(ID_KEY).s(), item.get(VALUE_KEY).bool()));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void delete(String id) {
        dynamoDbService.deleteDynamoDBItem(TABLE_NAME, ID_KEY, id);
    }
}
