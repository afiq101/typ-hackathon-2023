import { PrismaClient } from "@prisma/client";

const prisma_app = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL_APP } },
});

export default defineEventHandler(async (event) => {
  try {
    const { vName, vDescription, vStartDate, vEndDate, vStatus } = await readBody(event);

    const insertTask =
      await prisma_app.$executeRaw`INSERT INTO task (taskName, taskDescription, taskStartDate, taskEndDate, taskStatus) VALUES (${vName}, ${vDescription}, ${vStartDate}, ${vEndDate}, ${vStatus})`;

    if (!insertTask) {
      return {
        statusCode: 403,
        message: "Failed to add task.",
      };
    } else {
      return {
        statusCode: 200,
        message: "New task created.",
      };
    }
  } catch (error) {
    return {
      statusCode: 403,
      message: error,
    };
  }
});
