package org.cdg.featureflags.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

@Value.Immutable
@JsonSerialize(as = ImmutableFlagUpdateRequest.class)
@JsonDeserialize(builder = ImmutableFlagUpdateRequest.Builder.class)
public interface FlagUpdateRequest {
    @NonNull
    String getId();

    @Nullable
    String getName();

    @Nullable
    Boolean getValue();

    @Nullable
    Boolean getDefaultServe();

}


