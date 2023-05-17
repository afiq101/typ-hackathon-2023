import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.id || body.user == "") {
    return {
      statusCode: 400,
      message: "user and id is required",
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

  console.log("userrrrr: ", user);

  // CHECK IF USER IS EXIST
  const cat = await prisma.category.findFirst({
    where: {
      catId: parseInt(body.id),
      userID: user.userID,
    },
  });
  console.log("cat: ", cat);

  if (!cat)
    return {
      statusCode: 400,
      message: "category not found",
    };

  return {
    statusCode: 200,
    message: "Retrieve category detail",
    data: cat,
  };
});
