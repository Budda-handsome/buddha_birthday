package buddha.buddha_birthday.service;

import buddha.buddha_birthday.domain.User;
import buddha.buddha_birthday.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //회원가입
    public String join(User user) {
        //중복 id 검증
        validateDuplicateUser(user);
        userRepository.save(user);
        return user.getUserId();
    }

    //id 중복 방지
    private void validateDuplicateUser(User user) {
        userRepository.findById(user.getUserId())
                .ifPresent(u -> {
                    throw new IllegalStateException("이미 존재하는 ID 입니다.");
                });
    }

    //전체 회원 조회
    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public Optional<User> findOne(String userId) {
        return userRepository.findById(userId);
    }
}
