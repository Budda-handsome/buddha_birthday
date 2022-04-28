package buddha.buddha_birthday.repository;

import buddha.buddha_birthday.domain.User;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class MemoryUserRepository implements UserRepository {

    private static Map<String, User> store = new HashMap<>();
//    private static Long sequence = 0L;

    @Override
    public User save(User user) {
        user.setUserId("id");
        User result = store.put(user.getUserId(), user);
        return result;
    }

    @Override
    public Optional<User> findById(String id) {
//        return Optional.ofNullable(store.get(id));
        return store.values().stream()
                .filter(user -> user.getUserId().equals(id))
                .findAny();
    }

    @Override
    public Optional<User> findByName(String name) {
        return store.values().stream()
                .filter(user -> user.getName().equals(name))
                .findAny();
    }

    @Override
    public List<User> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }
}
