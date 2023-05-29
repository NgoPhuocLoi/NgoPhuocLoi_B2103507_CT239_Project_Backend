const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class UserService {
  static async getUserById(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        current_level: true,
      },
    });
    return { user };
  }
}

module.exports = UserService;
