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

    @PostMapping("/create")
    public ResponseEntity<String> createFlag(@RequestBody FlagRequest request) {

        if (request.type().equals(FlagType.BOOLEAN)) {
            flagRepository.upsert(new Flag(request.value()));
        } else {
            return ResponseEntity.badRequest().body("Bad Request, needs to be BOOLEAN");
        }
        return ResponseEntity.ok("Upsert complete!");
    }
}
