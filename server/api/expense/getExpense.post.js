import { PrismaClient } from "@prisma/client";
import { now } from "@vueuse/core";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const username = body.username;

  try {

    const getID =
      await prisma.$queryRaw`SELECT userID FROM user WHERE userUsername = ${username}`;

    const ID = getID[0].userID;

    const listing =
      await prisma.$queryRaw`SELECT expenseId, amount , description , catName , createdDate FROM expenses join category on categoryID = catId where expenses.userId = ${ID} and date(createdDate) = date(${new Date()}) `;

    if (!listing) {
      return {
        statusCode: 400,
        message: "Gagal mendapatkan data",
      };
    }

    return {
      statusCode: 200,
      message: "Berhasil mendapatkan data",
      data: listing,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Masalah pada server",
    };
  }
});
