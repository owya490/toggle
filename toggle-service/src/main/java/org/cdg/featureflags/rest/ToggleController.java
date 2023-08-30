package org.cdg.featureflags.rest;

import org.cdg.featureflags.models.Toggle;
import org.cdg.featureflags.models.ToggleType;
import org.cdg.featureflags.services.ToggleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(
        path = "/toggle",
        produces = MediaType.APPLICATION_JSON_VALUE,
        consumes = MediaType.APPLICATION_JSON_VALUE
)
public class ToggleController {
    @Autowired
    private ToggleRepository toggleRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Toggle<Boolean>> getToggleById(@PathVariable String id) {
        Optional<Toggle<Boolean>> maybeToggle = toggleRepository.get(id);
        return maybeToggle.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping(value = "/evaluate/{id}", consumes = {MediaType.TEXT_PLAIN_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<Boolean> evaluateToggleById(@PathVariable String id) {
        Optional<Toggle<Boolean>> maybeToggle = toggleRepository.get(id);
        return maybeToggle.map(toggle -> ResponseEntity.ok(toggle.value)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<String> createToggle(@RequestBody ToggleCreateRequest request) {
        if (request.getType().equals(ToggleType.BOOLEAN)) {
            Toggle<Boolean> toggle = new Toggle<>(request.getName(), request.getValue(), request.getDefaultServe());
            toggleRepository.upsert(toggle);
            return ResponseEntity.ok(toggle.id);
        } else {
            return ResponseEntity.badRequest().body("Bad Request!");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<String> updateToggle(@RequestBody ToggleUpdateRequest request) {
        Optional<Toggle<Boolean>> maybeToggle = toggleRepository.get(request.getId());
        if (maybeToggle.isPresent()) {
            Toggle<Boolean> definiteToggle = maybeToggle.get();
            Toggle<Boolean> toggle = new Toggle<>(request.getId(), Optional.ofNullable(request.getName()).orElse(definiteToggle.name), Optional.ofNullable(request.getValue()).orElse(definiteToggle.value), Optional.ofNullable(request.getDefaultServe()).orElse(definiteToggle.defaultServe));
            toggleRepository.upsert(toggle);
            return ResponseEntity.ok(toggle.id);
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
