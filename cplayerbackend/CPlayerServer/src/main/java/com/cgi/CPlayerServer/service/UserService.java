package com.cgi.CPlayerServer.service;

import com.cgi.CPlayerServer.exception.UserExistsException;
import com.cgi.CPlayerServer.model.User;
import com.cgi.CPlayerServer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    // Creating User
    public void registerUser(User user) throws UserExistsException {
        Optional<User> optUser = userRepository.findById(user.getName());
        if (optUser.isPresent()) {
            throw new UserExistsException();
        }
        String hashpw =
                BCrypt.hashpw(user.getPassword(),
                        BCrypt.gensalt());
        System.out.println(hashpw);
        user.setPassword(hashpw);

        userRepository.save(user);
    }
    public User login(String email, String password) {
        Optional<User> userSearch =
                userRepository.findById(email);
        User user = null;
        if(userSearch.isPresent()) {
            user = userSearch.get();
            boolean matched = BCrypt.checkpw(password, user.getPassword());
            if(!matched) {
                user = null;
            }
        }
        return user;
    }
    public Optional<User> getregistrationbyemail(String email) {
        Optional<User> userSearch =
                userRepository.findById(email);
        User user = null;
        if(userSearch.isPresent()) {
            user = userSearch.get();

            return userSearch;
        }
        return Optional.ofNullable(user);
    }
}
