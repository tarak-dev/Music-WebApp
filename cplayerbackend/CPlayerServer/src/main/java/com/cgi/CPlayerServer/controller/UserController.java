package com.cgi.CPlayerServer.controller;

import com.cgi.CPlayerServer.exception.UserExistsException;
import com.cgi.CPlayerServer.exception.UserNotFoundException;
import com.cgi.CPlayerServer.model.User;
import com.cgi.CPlayerServer.repository.UserRepository;
import com.cgi.CPlayerServer.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

    private UserService userService;
    private UserRepository userRepository;

    @Autowired
    public UserController(UserService userService) {
        super();
        this.userService = userService;
    }

    //Creating User
    @PostMapping("/register")
    @CrossOrigin("*")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        ResponseEntity<?> response = null;

        try {
            userService.registerUser(user);
            response = new
                    ResponseEntity<String>(HttpStatus.OK);
        } catch (UserExistsException e) {
            response = new
                    ResponseEntity<String>(HttpStatus.CONFLICT);
            e.printStackTrace();
        } catch (Exception e) {
            response = new
                    ResponseEntity<String>(HttpStatus.UNPROCESSABLE_ENTITY);
            e.printStackTrace();
        }
        return response;
    }

    @PostMapping("/login")
    @CrossOrigin("*")
    public ResponseEntity<?> login(@RequestBody User user)
            throws UserNotFoundException {

        User validUser = userService.login(user.getEmail(),
                user.getPassword());

        if (validUser == null) {
            throw new UserNotFoundException();
        }
        // Build the Json Web Token
        String token =
                Jwts.builder().
                        setId(validUser.getEmail()).
                        setSubject(validUser.getPassword())
                        .setIssuedAt(new Date()).
                        signWith(SignatureAlgorithm.HS256,
                                "usersecretkey").
                        compact();
        // Add it to a Map and send the map in response body
        Map<String, String> map1 = new
                HashMap<String, String>();
        map1.put("token", token);
        map1.put("message", "User Successfully logged in");

        ResponseEntity<Map<String, String>> response =
                new ResponseEntity<Map<String, String>>(
                        map1, HttpStatus.OK);
        return response;

    }

    @CrossOrigin(origins="*")
    @GetMapping("/getuserdetails/{userId}")
    public ResponseEntity<User> getUserdetail(@PathVariable("userId") String userId) {
        Optional<User> per_user = userService.getregistrationbyemail(userId);
        if(per_user.isPresent()) {
            User user = per_user.get();
            return new ResponseEntity<User>(user,HttpStatus.OK);
        }
        return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
    }
}

