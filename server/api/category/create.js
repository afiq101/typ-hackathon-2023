import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  if (!body.user || !body.name || !body.description) {
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

  const newCategory = await prisma.category.create({
    data: {
      userID: user.userID,
      catName: body.name,
      catDescription: body.description,
      catCreatedDate: new Date(),
      catStatus: "ACTIVE",
    },
  });

  if (!newCategory) {
    return {
      statusCode: 400,
      message: "Unable to add new category",
    };
  }

  return {
    statusCode: 200,
    message: "Successfully add new category",
  };
});
