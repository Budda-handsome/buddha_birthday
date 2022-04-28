package buddha.buddha_birthday.controller;

import buddha.buddha_birthday.domain.User;
import buddha.buddha_birthday.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/new")
    public String createForm() {
        return "users/createUserForm";
    }

    @PostMapping("/users/new")
    public String create(UserForm form) {
        User user = new User();
        user.setUserId(form.getUser_id());
        user.setPassword(form.getPassword());
        user.setName(form.getName());

        userService.join(user);

        return  "redirect:/";
    }
}