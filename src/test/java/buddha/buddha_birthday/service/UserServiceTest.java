package buddha.buddha_birthday.service;

import buddha.buddha_birthday.domain.User;
import buddha.buddha_birthday.repository.MemoryUserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {
    UserService userService;
    MemoryUserRepository userRepository;

    @BeforeEach
    public void beforeEach() {
        userRepository = new MemoryUserRepository();
        userService = new UserService(userRepository);
    }

    @AfterEach
    public void afterEach() {
        userRepository.clearStore();
    }

    @Test
    void 회원가입() {
        User user = new User();
        user.setUserId("김길동");

        String saveId = userService.join(user);

        User findUser = userService.findOne(saveId).get();
        assertThat(user.getUserId()).isEqualTo(findUser.getUserId());
    }

    @Test
    public void 중복_회원_예외() {
        User user1 = new User();
        user1.setUserId("spring");

        User user2 = new User();
        user2.setUserId("spring");

        IllegalStateException e = assertThrows(IllegalStateException.class, () -> userService.join(user2));
        assertThat(e.getMessage()).isEqualTo("이미 존재하는 ID 입니다.");
    }

    @Test
    void findUsers() {
    }

    @Test
    void findOne() {
    }
}