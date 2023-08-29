package org.cdg.featureflags.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.cdg.featureflags.models.FlagType;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;

@Value.Immutable
@JsonSerialize(as = ImmutableFlagCreateRequest.class)
@JsonDeserialize(builder = ImmutableFlagCreateRequest.Builder.class)
public interface FlagCreateRequest {
    @NonNull
    FlagType getType();

    @NonNull
    String getName();

    @JsonProperty("value")
    boolean getValue();

    boolean getDefaultServe();
}


