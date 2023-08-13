package org.cdg.featureflags.models;

public enum FlagType {
    BOOLEAN("boolean"),
    INTEGER("integer");
//    STRING("string");

    public final String type;

    FlagType(String type) {
        this.type = type;
    }
}
