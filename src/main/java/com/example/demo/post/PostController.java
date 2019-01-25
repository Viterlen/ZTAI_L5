//package com.example.demo.post;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import java.net.URI;
//import java.util.List;
//
//@RestController
//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("api/posts")
//public class PostController {
//
//    @Autowired
//    private PostRepository postRepository;
//
//    @GetMapping
//    public List<Post> getAllPosts() {
//        return postRepository.findAll();
//    }
//
//    @GetMapping("{id}")
//    public Post get(@PathVariable long id) {
//        return postRepository.findById(id).get();
//    }
//
//    @PostMapping()
//    public ResponseEntity<Void> createPost(@RequestBody Post post) {
//        Post postUpdated = postRepository.save(post);
//
//        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
//
//                .path("/{id").buildAndExpand(postUpdated.getId()).toUri();
//
//        return ResponseEntity.created(uri).build();
//    }
//}
