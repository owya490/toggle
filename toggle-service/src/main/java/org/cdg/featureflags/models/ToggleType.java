package org.cdg.featureflags.models;

public enum ToggleType {
    BOOLEAN("boolean"),
    INTEGER("integer");
//    STRING("string");

    public final String type;

    ToggleType(String type) {
        this.type = type;
    }
}
