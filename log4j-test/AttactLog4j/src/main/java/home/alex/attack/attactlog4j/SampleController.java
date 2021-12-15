package home.alex.attack.attactlog4j;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class SampleController {

    @RequestMapping("/sample")
    public String index(HttpServletRequest request) {
        System.out.println("here is the attact source that is not attack!!");

        return "sample test yes";
    }
}
