package org.cdg.featureflags.services;

import org.cdg.featureflags.utils.Pair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class DynamoDbService {

    @Autowired
    DynamoDbClient ddb;

    public Optional<Map<String, AttributeValue>> getDynamoDBItem(String tableName, String key, String keyVal) {

        HashMap<String, AttributeValue> keyToGet = new HashMap<String, AttributeValue>();

        keyToGet.put(key, AttributeValue.builder()
                .s(keyVal).build());

        GetItemRequest request = GetItemRequest.builder()
                .key(keyToGet)
                .tableName(tableName)
                .build();

        try {
//            return Optional.of(ddb.getItem(request).item());
            return Optional.ofNullable(ddb.getItem(request).item());

        } catch (DynamoDbException e) {
            System.err.println(e.getMessage());
        }
        return Optional.empty();
    }

    public void putItemInTable(String tableName,
                               String key,
                               String keyVal,
                               String albumTitle,
                               String albumTitleValue,
                               String awards,
                               String awardVal,
                               String songTitle,
                               String songTitleVal) {

        HashMap<String, AttributeValue> itemValues = new HashMap<String, AttributeValue>();

        // Add all content to the table
        itemValues.put(key, AttributeValue.builder().s(keyVal).build());
        itemValues.put(songTitle, AttributeValue.builder().s(songTitleVal).build());
        itemValues.put(albumTitle, AttributeValue.builder().s(albumTitleValue).build());
        itemValues.put(awards, AttributeValue.builder().s(awardVal).build());

        PutItemRequest request = PutItemRequest.builder()
                .tableName(tableName)
                .item(itemValues)
                .build();

        try {
            ddb.putItem(request);
            System.out.println(tableName + " was successfully updated");

        } catch (ResourceNotFoundException e) {
            System.err.format("Error: The Amazon DynamoDB table \"%s\" can't be found.\n", tableName);
            System.err.println("Be sure that it exists and that you've typed its name correctly!");
        } catch (DynamoDbException e) {
            System.err.println(e.getMessage());
        }
    }

    public void updateTableItem(String tableName,
                                String key,
                                String keyVal,
//                                String name,
//                                boolean updateVal,
                                Map<String, Pair<String, ?>> updateMap) {

        HashMap<String, AttributeValue> itemKey = new HashMap<String, AttributeValue>();
        System.out.println(keyVal);
        itemKey.put(key, AttributeValue.builder().s(keyVal).build());

        HashMap<String, AttributeValueUpdate> updatedValues =
                new HashMap<String, AttributeValueUpdate>();
        // Update the column specified by name with updatedVal

        updateMap.forEach((updateKey, updateValue) -> updatedValues.put(updateKey, AttributeValueUpdate.builder().value(updateAttributeBuilder(updateValue)).action(AttributeAction.PUT).build()));
//        updatedValues.put(name, AttributeValueUpdate.builder()
//                .value(AttributeValue.builder().bool(updateVal).build())
//                .action(AttributeAction.PUT)
//                .build());

        UpdateItemRequest request = UpdateItemRequest.builder()
                .tableName(tableName)
                .key(itemKey)
                .attributeUpdates(updatedValues)
                .build();
        try {
            ddb.updateItem(request);
        } catch (DynamoDbException e) {
            System.err.println(e.getMessage());
        }

    }

    public void deleteDynamoDBItem(String tableName, String key, String keyVal) {

        HashMap<String, AttributeValue> keyToGet =
                new HashMap<String, AttributeValue>();

        keyToGet.put(key, AttributeValue.builder()
                .s(keyVal)
                .build());

        DeleteItemRequest deleteReq = DeleteItemRequest.builder()
                .tableName(tableName)
                .key(keyToGet)
                .build();

        try {
            ddb.deleteItem(deleteReq);
        } catch (DynamoDbException e) {
            System.err.println(e.getMessage());
        }
    }

    private static AttributeValue updateAttributeBuilder(Pair<String, ?> updatePair) {
        AttributeValue.Builder builder = AttributeValue.builder();
        return switch (updatePair.left()) {
            // TODO add map and list support
            case "BOOL" -> builder.bool((Boolean) updatePair.right()).build();
            case "S" -> builder.s((String) updatePair.right()).build();
            case "N" -> builder.n(((Long) updatePair.right()).toString()).build();
            default -> null;
        };
    }

}
