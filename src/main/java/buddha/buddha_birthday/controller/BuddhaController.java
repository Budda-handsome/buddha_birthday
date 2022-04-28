package buddha.buddha_birthday.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class BuddhaController {

    @GetMapping("buddha")
    public String buddha(Model model) {
        model.addAttribute("data", "buddha");
        return "buddha";
    }

    @GetMapping("buddha_mvc")
    public String buddhaMvc(@RequestParam(value = "name") String name, Model model) {
        model.addAttribute("name", name);
        return "buddha_templete";
    }

    @GetMapping("buddha_string")
    @ResponseBody
    public String buddhaString(@RequestParam("name") String name) {
        return "buddha" + name;
    }

    @GetMapping("buddha_api")
    @ResponseBody
    public Buddha buddhaApi(@RequestParam("name") String name) {
        Buddha buddha = new Buddha();
        buddha.setName(name);
        return buddha;
    }

    static class Buddha {
        private String name;

        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }
}
