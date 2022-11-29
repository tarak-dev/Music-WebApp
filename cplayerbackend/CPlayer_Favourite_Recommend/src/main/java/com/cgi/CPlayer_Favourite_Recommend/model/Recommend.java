package com.cgi.CPlayer_Favourite_Recommend.model;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection= "Recommend")
public class Recommend {

    @Id
    private String email;
    private String Title;
    private String SungBy;
    private boolean active;
    private String image;
    private String url;

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Recommend() {

    }

    public Recommend(String email, String title, String sungBy, boolean active, String image) {
        super();
        this.email = email;
        this.Title = title;
        this.SungBy = sungBy;
        this.active = active;
        this.image = image;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        this.Title = title;
    }

    public String getSungBy() {
        return SungBy;
    }

    public void setSungBy(String sungBy) {
        this.SungBy = sungBy;
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
        return "Recommend[email=" + email + ", Title=" + Title + ", SungBy=" + SungBy +", active= " + active +", image=" + image + "]";
    }
}

