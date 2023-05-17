import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const blog = await prisma.blog.findMany({
      select: {
        blogID: true,
        blogName: true,
        blogContent: true,
        blogAuthor: true,
        blogTag: true,
      },
    });

    return {
      statusCode: 200,
      message: "Berhasil mendapatkan data",
      data: blog,
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Masalah pada server",
    };
  }
});
