package com.cgi.CPlayer_Favourite_Recommend.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.CPlayer_Favourite_Recommend.model.Favourite;
import com.cgi.CPlayer_Favourite_Recommend.repository.FavouriteRepository;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/favourites")
public class FavouriteController {
    @Autowired
    private FavouriteRepository favouriteRepository;

    @PostMapping("/addtofav")
    public String addtoFavourite(@RequestBody Favourite favourite)
    {
        favouriteRepository.save(favourite);
        return "Added in Favourite";
    }

    @GetMapping("/getallfav")
    public List<Favourite> getFavourite()
    {
        return (List<Favourite>) favouriteRepository.findAll();
    }


}
