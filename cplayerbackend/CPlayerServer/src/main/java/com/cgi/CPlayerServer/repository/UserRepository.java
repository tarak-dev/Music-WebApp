package com.cgi.CPlayerServer.repository;

import com.cgi.CPlayerServer.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    User findByEmailAndPassword(String email,
                                String password);
}
