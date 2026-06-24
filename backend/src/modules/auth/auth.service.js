// Authenticates an admin against the users table (bcrypt-hashed password)
// and issues a signed JWT on success. Only place that touches Prisma for auth.
const prisma = require("../../config/db");
const bcrypt = require("bcryptjs");
const { signToken } = require("../../utils/jwt");

async function login(username, password) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return null;

  const token = signToken({
    id: user.id,
    username: user.username,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
    },
  };
}

module.exports = { login };
