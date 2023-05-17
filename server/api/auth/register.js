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

  if (!user) {
    return {
      statusCode: 400,
      message: "Unable to register user",
    };
  }

  // ADD ROLE
  const role = await prisma.userrole.create({
    data: {
      userRoleUserID: user.userID,
      userRoleRoleID: 3,
      userRoleCreatedDate: new Date(),
    },
  });

  // ADD DEFAULT CATEGORY
  const cat = await prisma.category.createMany({
    data: [
      {
        userID: user.userID,
        catName: "Food & Dining",
        catDescription: "A Flavorful Journey through Culinary Delights",
        catCreatedDate: new Date(),
        catStatus: "ACTIVE",
      },
      {
        userID: user.userID,
        catName: "Transportation",
        catDescription: "Effortless Travel and Seamless Commutes",
        catCreatedDate: new Date(),
        catStatus: "ACTIVE",
      },
      {
        userID: user.userID,
        catName: "Utilities",
        catDescription: "Essential Services for Everyday Living",
        catCreatedDate: new Date(),
        catStatus: "ACTIVE",
      },
    ],
  });

  // ADD BUDGET
  const budget = await prisma.budget.create({
    data: {
      userId: user.userID,
      budgetPerMonth: 0,
      budgetCreatedDate: new Date(),
    },
  });

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
