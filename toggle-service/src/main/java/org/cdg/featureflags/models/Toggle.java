package org.cdg.featureflags.models;

import java.util.UUID;

public class Toggle<T> {
    public String id;
    public T value;

    public String name;

    public boolean defaultServe;

    public Toggle(String name, T value, boolean defaultServe) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.value = value;
        this.defaultServe = defaultServe;
    }

    public Toggle(String id, String name, T value, boolean defaultServe) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.defaultServe = defaultServe;
    }
}
