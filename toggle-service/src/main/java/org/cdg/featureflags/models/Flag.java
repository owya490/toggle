package org.cdg.featureflags.models;

import java.util.UUID;

public class Flag {
    public String id;
    public boolean value;

    public Flag(boolean value) {
        this.id = UUID.randomUUID().toString();
        this.value = value;
    }

    public Flag(String id, boolean value) {
        this.id = id;
        this.value = value;
    }
}
