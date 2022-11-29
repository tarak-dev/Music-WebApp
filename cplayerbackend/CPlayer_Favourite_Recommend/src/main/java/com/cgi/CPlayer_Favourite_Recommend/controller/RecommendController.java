package com.cgi.CPlayer_Favourite_Recommend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.CPlayer_Favourite_Recommend.model.Recommend;
import com.cgi.CPlayer_Favourite_Recommend.repository.RecommendRepository;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/recommend")
public class RecommendController {


    @Autowired
    private RecommendRepository repository;

    @PostMapping("/addtorecommend")
    public String addtoRecommend(@RequestBody Recommend recommend)
    {
        repository.save(recommend);
        return "Added in Recommend";
    }

    @GetMapping("/getallrecommend")
    public List<Recommend> getRecommend()
    {
        return(List<Recommend>) repository.findAll();
    }


}

