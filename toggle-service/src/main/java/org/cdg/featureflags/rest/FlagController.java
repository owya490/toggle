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
    public ResponseEntity<String> createFlag(@RequestBody FlagCreateRequest request) {
        if (request.type().equals(FlagType.BOOLEAN)) {
            Flag flag = new Flag(request.value());
            flagRepository.upsert(flag);
            return ResponseEntity.ok(flag.id);
        } else {
            return ResponseEntity.badRequest().body("Bad Request!");
        }
    }

//    @PostMapping("/update/{id}")
//    public ResponseEntity<String> updateFlag(@PathVariable String id) {
//        Optional<Flag> maybeFlag = flagRepository.get(id);
//        if (maybeFlag.isPresent()) {
//            flagRepository.upsert(new Flag(id, !maybeFlag.get().value));
//        } else {
//            return ResponseEntity.badRequest().body("Unable to Update!");
//        }
//        return ResponseEntity.ok("Success!");
//    }
}
