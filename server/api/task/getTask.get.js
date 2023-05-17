import { PrismaClient } from "@prisma/client";

const prisma_mawardb = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL } },
  });
  
  // Database main_app
  const prisma_main_app = new PrismaClient({
    datasources: { db: { url: process.env.DATABASE_URL_2 } },
  });



  export default defineEventHandler(async (event) => {
    try {
      //---------------------------------------------
      // Using ORM (Object Relational Mapping)
      //---------------------------------------------
  
      // const books = await prisma_main_app.book.findMany({
      //   select: {
      //     bookID: true,
      //     bookName: true,
      //     bookSynopsis: true,
      //     bookAuthor: true,
      //   },
      // });
  
      //---------------------------------------------
      // Using Raw SQL and call from another database (main_app)
      //---------------------------------------------
  
      const tasks = await prisma_main_app.$queryRaw`
        SELECT 
            taskId,
            taskUserId,
            DATE_FORMAT(taskStartDate, '%Y-%m-%d %H:%i:%s') AS taskStartDate,
            DATE_FORMAT(taskEndDate, '%Y-%m-%d %H:%i:%s') AS taskEndDate,
            taskDescription,
            taskStatus
        FROM 
            task
        WHERE taskUserId = '3'
        `;
  
      if (!tasks) {
        return {
          statusCode: 400,
          message: "Gagal mendapatkan data",
        };
      }
  
      return {
        statusCode: 200,
        message: "Berhasil mendapatkan data",
        data: tasks,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        message: "Masalah pada server",
      };
    }
  });