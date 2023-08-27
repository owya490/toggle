package org.cdg.featureflags.rest;

import org.cdg.featureflags.models.Flag;
import org.cdg.featureflags.models.FlagType;
import org.cdg.featureflags.services.FlagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(
        path = "/flag",
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE
)
public class FlagController {
    @Autowired
    private FlagRepository flagRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Flag> getFlagById(@PathVariable String id) {
        Optional<Flag> maybeFlag = flagRepository.get(id);
        return maybeFlag.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/evaluate/{id}", consumes = {MediaType.TEXT_PLAIN_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Boolean> evaluateFlagById(@PathVariable String id) {
        Optional<Flag> maybeFlag = flagRepository.get(id);
        return maybeFlag.map(flag -> ResponseEntity.ok(flag.value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<String> createFlag(@RequestBody FlagCreateRequest request) {
        if (request.getType().equals(FlagType.BOOLEAN)) {
            Flag flag = new Flag(request.getName(), request.getValue(), request.getDefaultServe());
            flagRepository.upsert(flag);
            return ResponseEntity.ok(flag.id);
        } else {
            return ResponseEntity.badRequest().body("Bad Request!");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateFlag(@RequestBody FlagUpdateRequest request) {
        Optional<Flag> maybeFlag = flagRepository.get(request.getId());
        if (maybeFlag.isPresent()) {
            Flag definiteFlag = maybeFlag.get();
            Flag flag = new Flag(request.getId(), Optional.ofNullable(request.getName()).orElse(definiteFlag.name), Optional.ofNullable(request.getValue()).orElse(definiteFlag.value), Optional.ofNullable(request.getDefaultServe()).orElse(definiteFlag.defaultServe));
            flagRepository.upsert(flag);
            return ResponseEntity.ok(flag.id);
        } else {
            return ResponseEntity.badRequest().body("Bad Request!");
        }

//        if (maybeFlag.isPresent()) {
//            flagRepository.upsert(new Flag(id, !maybeFlag.get().value));
//        } else {
//            return ResponseEntity.badRequest().body("Unable to Update!");
//        }
//        return ResponseEntity.ok("Success!");
    }
}
