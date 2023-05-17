import sha256 from "crypto-js/sha256.js";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.username || !body.password || !body.email) {
    return {
      statusCode: 400,
      message: "Username, password, and email are required",
    };
  }

  const userExist = await prisma.user.findFirst({
    where: {
      OR: [
        {
          userUsername: body.username,
        },
        {
          userEmail: body.email,
        },
      ],
    },
  });

  if (userExist)
    return {
      statusCode: 400,
      message: "username or email already exist",
    };

  const user = await prisma.user.create({
    data: {
      userUsername: body.username,
      userPassword: body.password,
      userEmail: body.email,
      userCreatedDate: new Date(),
      userStatus: "active",
    },
  });

  const role = await prisma.userrole.create({
    data: {
      userRoleUserID: user.userID,
      userRoleRoleID: 3,
      roleCreatedDate: new Date(),
    },
  });

  if (!user) {
    return {
      statusCode: 400,
      message: "Unable to register user",
    };
  }

  //   const accessToken = generateAccessToken({
  //     username: user.username,
  //     role: role.roleName,
  //   });
  //   const refreshToken = generateRefreshToken({
  //     username: user.username,
  //     role: role.roleName,
  //   });

  return {
    statusCode: 200,
    message: "Register success",
  };
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "7d" });
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "30m" });
}
