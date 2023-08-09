package org.cdg.featureflags;

import org.cdg.featureflags.models.Flag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/flag")
public class FlagController {
    @Autowired
    private FlagRepository flagRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Flag> getFlagById(@PathVariable String id) {
        Optional<Flag> maybeFlag = flagRepository.get(id);
        return maybeFlag.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/create")
    public ResponseEntity<String> createFlag(@RequestBody Flag body) {
    }
}
