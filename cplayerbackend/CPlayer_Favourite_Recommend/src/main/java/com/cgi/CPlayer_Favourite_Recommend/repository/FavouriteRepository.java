package com.cgi.CPlayer_Favourite_Recommend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cgi.CPlayer_Favourite_Recommend.model.Favourite;

public interface FavouriteRepository extends MongoRepository<Favourite, String>{

}
