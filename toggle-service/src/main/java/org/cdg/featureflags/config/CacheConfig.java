package org.cdg.featureflags.config;

import com.github.benmanes.caffeine.cache.CacheLoader;
import org.cdg.featureflags.models.Toggle;
import org.cdg.featureflags.models.ToggleNotFoundException;
import org.cdg.featureflags.services.DynamoDbService;
import org.cdg.featureflags.services.ToggleCache;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.services.dynamodb.model.AttributeValue;

import java.util.Map;
import java.util.Optional;

import static org.cdg.featureflags.services.ToggleRepository.*;

@Configuration
@EnableCaching
public class CacheConfig {
    @Autowired
    DynamoDbService dynamoDbService;

    @Bean
    public ToggleCache<Boolean> booleanToggleCacheBean() {
        return new ToggleCache<Boolean>(new CacheLoader<String, Toggle<Boolean>>() {
            @Override
            public @Nullable Toggle<Boolean> load(String key) throws Exception {
                return getToggleFromDdb(key).orElseThrow(ToggleNotFoundException::new);
            }
        });
    }

    private Optional<Toggle<Boolean>> getToggleFromDdb(String id) {
        Optional<Map<String, AttributeValue>> maybeItem = dynamoDbService.getDynamoDBItem(TABLE_NAME, ID_KEY, id);
        if (maybeItem.isPresent()) {
            Map<String, AttributeValue> item = maybeItem.get();
            return Optional.of(new Toggle<>(item.get(ID_KEY).s(), item.get(NAME_KEY).s(), item.get(VALUE_KEY).bool(), item.get(DEFAULT_SERVE_KEY).bool()));
        } else {
            return Optional.empty();
        }
    }


}
