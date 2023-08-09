package org.cdg.featureflags.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;

@Configuration
public class DynamoDbConfig {

    @Bean
    public DynamoDbClient dynamoDbClientBean() {
        return DynamoDbClient.builder()
                .region(Region.AP_SOUTHEAST_2)
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build();
    }

}
