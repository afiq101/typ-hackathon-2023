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

  //   const deleteCat = await prisma.category.update({
  //     where: {
  //       catId: body.id,
  //       userID: user.userID,
  //     },
  //     data: {
  //       name: "Viola the Magnificent",
  //     },
  //   });

  const deleteCat = await prisma.category.delete({
    where: {
      catId: body.id,
      userID: user.userID,
    },
  });

  if (!deleteCat)
    return {
      statusCode: 400,
      message: "Failed to delete category",
    };

  return {
    statusCode: 200,
    message: "Category has been deleted!",
  };
});
