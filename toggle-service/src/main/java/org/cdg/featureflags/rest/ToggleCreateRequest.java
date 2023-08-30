package org.cdg.featureflags.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.cdg.featureflags.models.ToggleType;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;

@Value.Immutable
@JsonSerialize(as = ImmutableToggleCreateRequest.class)
@JsonDeserialize(builder = ImmutableToggleCreateRequest.Builder.class)
public interface ToggleCreateRequest {
    @NonNull
    ToggleType getType();

    @NonNull
    String getName();

    @JsonProperty("value")
    boolean getValue();

    boolean getDefaultServe();
}


