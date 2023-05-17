import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //   const { username, password } = event.body;

  const body = await readBody(event);

  
  // CHECK IF USER IS EXIST
  const key = await prisma.lookup.findFirst({
    where: {
      lookupID: 1,
    },
  });
  
  if (!key)
    return {
      statusCode: 400,
      message: "key not found",
    };

  return {
    statusCode: 200,
    message: "Retrieve key detail",
    data: key,
  };
});
