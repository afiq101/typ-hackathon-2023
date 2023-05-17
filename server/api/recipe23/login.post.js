import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {


  const body = await readBody(event);

  const username = body.usernameR;
  const password = body.passwordR;

  if (!username || !password) {
    return {
      statusCode: 500,
      message: "Username and Password required",
    };
  }

  const user = await prisma.recipe23user.findFirst({
    where: {
      userName: username,
      userPassword: password,
    },
  });

  if (!user) {
    return {
      statusCode: 500,
      message: "Fail to Login",
      data: user,
    };
  }

  return {
    statusCode: 200,
    message: "Success to Login",
    data: user,
  };
});