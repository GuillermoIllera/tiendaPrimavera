package es.prueba.spring.main.control;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class viewController {
    @RequestMapping("index")
    public String viewBooks(Model model) {
        return "index";
    }
}
