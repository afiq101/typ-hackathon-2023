import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.user) {
    return {
      statusCode: 400,
      message: "user is required",
    };
  }

  // CHECK IF USER IS EXIST
  const user = await prisma.user.findFirst({
    where: {
      userUsername: body.user,
    },
  });

  if (!user)
    return {
      statusCode: 400,
      message: "User not found",
    };

  // SELECT * FROM category WHERE userID = user.userID
  const budgetHistory = await prisma.budgetHistory.findMany({
    where: {
      userId: user.userID,
    },
    select: {
      bhAmount: true,
      bhCreatedDate: true,
      bhStatus: true,
    },
    orderBy: {
      bhCreatedDate: "desc",
    },
  });

  if (!budgetHistory) {
    return {
      statusCode: 400,
      message: "Unable to get budget history",
    };
  }

  return {
    statusCode: 200,
    message: "Total of " + budgetHistory.length + " budget",
    data: budgetHistory,
  };
});
