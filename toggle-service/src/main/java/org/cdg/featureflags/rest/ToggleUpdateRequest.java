package org.cdg.featureflags.rest;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.immutables.value.Value;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

@Value.Immutable
@JsonSerialize(as = ImmutableToggleUpdateRequest.class)
@JsonDeserialize(builder = ImmutableToggleUpdateRequest.Builder.class)
public interface ToggleUpdateRequest {
    @NonNull
    String getId();

    @Nullable
    String getName();

    @Nullable
    Boolean getValue();

    @Nullable
    Boolean getDefaultServe();

}


