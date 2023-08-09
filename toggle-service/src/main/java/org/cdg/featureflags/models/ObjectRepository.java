package org.cdg.featureflags.models;

import java.util.Optional;

public interface ObjectRepository<T> {
    public void upsert(T t);

    public Optional<T> get(String id);

    public void delete(String id);
}
