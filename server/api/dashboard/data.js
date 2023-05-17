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

  // Array to store expenses for each month
  const expensesByMonth = [];
  // Loop through each month
  for (let month = 1; month <= 12; month++) {
    // Calculate the start and end dates for the month
    const startDate = new Date(2023, month - 1, 1);
    const endDate = new Date(2023, month, 1);

    // Select data for the specified month
    const expenses = await prisma.expenses.findMany({
      where: {
        createdDate: {
          gte: startDate,
          lt: endDate,
        },
        userId: user.userID,
      },
    });

    // Calculate the sum of expenses for the month
    const sumOfExpenses = expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );

    // Store the expenses for the month
    expensesByMonth.push(sumOfExpenses);
  }
  // Print the expenses for each month
  for (let month = 1; month <= 12; month++) {
    console.log(`Expenses for month ${month}:`, expensesByMonth[month - 1]);
  }

  // GET CURRENT MONTH
  const currentMonth = new Date().getMonth() + 1;

  // GET SUM AMOUNT EXPENSES FOR CURRENT MONTH
  const expenses = await prisma.expenses.findMany({
    where: {
      createdDate: {
        gte: new Date(2023, currentMonth - 1, 1),
        lt: new Date(2023, currentMonth, 1),
      },
      userId: user.userID,
    },
  });

  const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // GET USER BUDGET PER MONTH
  const budget = await prisma.budget.findFirst({
    where: {
      userId: user.userID,
    },
  });

  // GET PERCENTAGE OF USER BUDGET AND SUM
  const percentage = (sum / budget.budgetPerMonth) * 100;

  const perMonth = budget.budgetPerMonth;

  const remaining = perMonth - sum;

  const catExpenses = await prisma.$queryRaw`
  SELECT catName AS CAT, SUM(b.amount) AS AMOUNT
  FROM category a
  LEFT JOIN expenses b ON a.catId = b.categoryID
  WHERE a.userID = ${user.userID}
  GROUP BY a.catId
`;

  return {
    statusCode: 200,
    message: "success",
    data: {
      expensesByMonth,
      currentMonth,
      sum,
      perMonth,
      percentage,
      remaining,
      catExpenses,
    },
  };
});
