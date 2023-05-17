import sha256 from "crypto-js/sha256.js";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.username || !body.password) {
    return {
      statusCode: 400,
      message: "Username and password are required",
    };
  }

  const user = await prisma.user.findFirst({
    where: {
      userUsername: body.username,
      userPassword: body.password,
    },
  });

  console.log(user);

  if (!user) {
    return {
      statusCode: 404,
      message: "Invalid username or password",
    };
  }

  const roles = await prisma.userrole.findFirst({
    where: {
      userRoleUserID: user.userID,
    },
    select: {
      role: {
        select: {
          roleName: true,
        },
      },
    },
  });

  // const roles = await prisma.userrole.findFirst({
  //   where: {
  //     userRoleUserID: user.userID,
  //   },
  // });

  // Get user roles
  // const roles = await prisma.userrole.findMany({
  //   where: {
  //     userRoleUserID: user.userID,
  //   },
  //   select: {
  //     role: {
  //       select: {
  //         roleName: true,
  //       },
  //     },
  //   },
  // });

  const roleName = roles.role.roleName;
  // console.log(roles);
  // const roleName = null;

  const accessToken = generateAccessToken({
    username: user.userUsername,
    roles: roleName,
  });
  const refreshToken = generateRefreshToken({
    username: user.userUsername,
    roles: roleName,
  });

  return {
    statusCode: 200,
    message: "Login success",
    data: {
      username: user.userUsername,
      roles: roleName,
      accessToken,
      refreshToken,
    },
  };
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30m" });
}
