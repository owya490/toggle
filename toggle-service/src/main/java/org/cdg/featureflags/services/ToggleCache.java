package org.cdg.featureflags.services;

import com.github.benmanes.caffeine.cache.CacheLoader;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;
import org.cdg.featureflags.models.Toggle;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class ToggleCache<T> {

    @Autowired
    DynamoDbService dynamoDbService;
    LoadingCache<String, Toggle<T>> toggleCache;

    public ToggleCache(CacheLoader<String, Toggle<T>> cacheLoader) {
        this.toggleCache = Caffeine.newBuilder()
                .initialCapacity(100)
                .maximumSize(500)
                .build(cacheLoader);
    }

    public Optional<Toggle<T>> getFromToggleCache(String id) {
        try {
            return Optional.of(this.toggleCache.get(id));
        } catch (Exception e) {
            System.out.println("Can't find toggle");
        }

        return Optional.empty();
    }

    public void invalidateToggleInCache(String id) {
        this.toggleCache.invalidate(id);
    }

}
