package org.cdg.featureflags.models;

import java.util.UUID;

public class Flag {
    public String id;
    public boolean value;

    public String name;

    public boolean defaultServe;

    public Flag(String name, boolean value, boolean defaultServe) {
        this.id = UUID.randomUUID().toString();
        this.name = name;
        this.value = value;
        this.defaultServe = defaultServe;
    }

    public Flag(String id, String name, boolean value, boolean defaultServe) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.defaultServe = defaultServe;
    }
}
