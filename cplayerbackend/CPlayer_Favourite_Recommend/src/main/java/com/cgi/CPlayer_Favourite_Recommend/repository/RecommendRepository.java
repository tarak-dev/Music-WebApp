package com.cgi.CPlayer_Favourite_Recommend.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.cgi.CPlayer_Favourite_Recommend.model.Favourite;
import com.cgi.CPlayer_Favourite_Recommend.model.Recommend;

public interface RecommendRepository extends MongoRepository<Recommend, String>{

}
