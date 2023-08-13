package org.cdg.featureflags.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.cdg.featureflags.models.FlagType;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;

@Value.Immutable
@JsonSerialize(as = ImmutableFlagRequest.class)
@JsonDeserialize(builder = ImmutableFlagRequest.Builder.class)
public interface FlagRequest {
    @NonNull
    FlagType type();

    @JsonProperty("value")
    boolean value();
}


