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
  const categoryList = await prisma.category.findMany({
    where: {
      userID: user.userID,
    },
    select: {
      catId: true,
      catName: true,
      catDescription: true,
      catCreatedDate: true,
      catStatus: true,
    },
  });

  if (!categoryList) {
    return {
      statusCode: 400,
      message: "Unable to get category list",
    };
  }

  return {
    statusCode: 200,
    message: "Total of " + categoryList.length + " categories",
    data: categoryList,
  };
});
