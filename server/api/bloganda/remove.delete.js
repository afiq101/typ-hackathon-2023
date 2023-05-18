import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
      const id = parseInt(event.pathParameters.id);
  
      if (!id) {
        return {
          statusCode: 400,
          message: "ID harus diisi",
        };
      }
  
      const deleteBook = await prisma.blog.delete({
        where: {
          bookID: parseInt(id),
        },
      });
  
      if (!deleteBook) {
        return {
          statusCode: 500,
          message: "Gagal menghapus data",
        };
      }
  
      return {
        statusCode: 200,
        message: "Berhasil menghapus data",
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        message: "Masalah pada server",
      };
    }
  });