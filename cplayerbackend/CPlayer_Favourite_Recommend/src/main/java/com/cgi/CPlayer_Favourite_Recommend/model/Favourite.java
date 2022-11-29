package com.cgi.CPlayer_Favourite_Recommend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection= "Favourite")
public class Favourite {

    @Id
    private String email;
    private String title;
    private String sungBy;
    private boolean active;
    private String image;
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }



    public Favourite() {

    }

    public Favourite(String email, String title, String sungBy, boolean active, String image) {
        super();
        this.email = email;
        this.title=title;
        this.sungBy = sungBy;
        this.active = active;
        this.image = image;
        this.url= url;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSungBy() {
        return sungBy;
    }

    public void setSungBy(String sungBy) {
        this.sungBy = sungBy;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Favourite[email=" + email + ", Title=" + title + ", SungBy=" + sungBy +", active= " + active +", image=" + image + "]";
    }
}