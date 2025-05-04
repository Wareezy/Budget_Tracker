export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  registerUser(user) {
    if (!user || !user.userId || !user.email) {
      throw new Error("Invalid user data");
    }

    const existing = this.userRepository.findById(user.userId);
    if (existing) {
      throw new Error("User already exists");
    }

    this.userRepository.save(user);
    return user;
  }

  getUserById(id) {
    const user = this.userRepository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }

  getAllUsers() {
    return this.userRepository.findAll();
  }

  deleteUser(id) {
    this.userRepository.delete(id);
  }
}