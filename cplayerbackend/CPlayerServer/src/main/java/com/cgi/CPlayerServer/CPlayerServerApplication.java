package com.cgi.CPlayerServer;

import com.cgi.CPlayerServer.jwtfilter.AuthFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import javax.servlet.Filter;

@SpringBootApplication
public class CPlayerServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(CPlayerServerApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<Filter> jwtFilter() {
		FilterRegistrationBean<Filter> bean =
				new FilterRegistrationBean<Filter>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/user");

		return bean;
	}

}
