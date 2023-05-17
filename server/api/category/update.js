import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (
    !body.id ||
    !body.user ||
    !body.name ||
    !body.description ||
    !body.status
  ) {
    return {
      statusCode: 400,
      message: "Please provide required parameters",
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

  const updateCat = await prisma.category.update({
    where: {
      catId: parseInt(body.id),
      userID: user.userID,
    },
    data: {
      catName: body.name,
      catDescription: body.description,
      catStatus: body.status,
    },
  });

  if (!updateCat)
    return {
      statusCode: 400,
      message: "Failed to update category",
    };

  return {
    statusCode: 200,
    message: "Category has been updated!",
  };
});
