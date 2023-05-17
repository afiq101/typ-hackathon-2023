import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.user || !body.amount) {
    return {
      statusCode: 400,
      message: "Please fill all required fields",
    };
  }

  // CHECK IF USER IS EXIST
  const user = await prisma.user.findFirst({
    where: {
      userUsername: body.user,
    },
  });
  console.log("user nye la: ", user);

  if (!user)
    return {
      statusCode: 400,
      message: "User not found",
    };

  console.log("user: ", user.userID);

  //   const updateBudget = await prisma.budget.update({
  //     where: {
  //       userId: user.userID,
  //     },
  //     data: {
  //       budgetPerMonth: body.amount,
  //       budgetUpdatedDate: new Date(),
  //     },
  //   });

  // UPDATE USER PER MONTH BUDGET VASED ON USERID

  //   const updateBudget = await prisma.budget.update({
  //     where: {
  //       userId: user.userID,
  //     },
  //     data: {
  //       budgetPerMonth: body.amount,
  //       budgetUpdatedDate: new Date(),
  //     },
  //   });

  const updateBudget =
    await prisma.$queryRaw`UPDATE budget SET budgetPerMonth = ${parseFloat(
      body.amount
    )} WHERE userId = ${user.userID}`;

  if (!updateBudget) {
    return {
      statusCode: 400,
      message: "Unable to set new budget",
    };
  }

  // SET LATEST BUDGET HISTORY STATUS TO INACTIVE
  const latestBudgetHis = await prisma.budgetHistory.findFirst({
    where: {
      userId: user.userID,
      bhStatus: "ACTIVE",
    },
  });

  if (latestBudgetHis) {
    // UPDATE LATEST STATUS TO INACTIVE
    const updateLatestBudgetHis = await prisma.budgetHistory.update({
      where: {
        bhId: latestBudgetHis.bhId,
      },
      data: {
        bhStatus: "INACTIVE",
      },
    });
  }

  // CREATE BUDGET HISTORY
  const budgetHis = await prisma.budgetHistory.create({
    data: {
      userId: user.userID,
      bhAmount: parseFloat(body.amount),
      bhCreatedDate: new Date(),
      bhStatus: "ACTIVE",
    },
  });

  return {
    statusCode: 200,
    message: "Successfully set new budget",
  };
});
