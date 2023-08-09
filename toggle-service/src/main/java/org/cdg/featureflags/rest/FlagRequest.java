package org.cdg.featureflags.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.cdg.featureflags.models.FlagType;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;

@JsonSerialize(as = ImmutableFlagRequest.class)
@JsonDeserialize(builder = ImmutableFlagRequest.class)
@Value.Immutable
public interface FlagRequest {
    @NonNull
    public FlagType type = FlagType.BOOLEAN;
    @NonNull
    public boolean value = false;
}
