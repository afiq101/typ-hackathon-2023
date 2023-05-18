import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const {
      blogID: id,
      blogName: nama,
      blogContent: kandungan,
      blogAuthor: pengarang,
      blogTag: tag,
    } = await readBody(event);

    if (!nama || !pengarang || !id) {
      return {
        statusCode: 400,
        message: "ID, Nama dan pengarang harus diisi",
      };
    }

    const updateBook = await prisma.blog.update({
      where: {
        bookID: parseInt(id),
      },
      data: {
        blogName: nama,
        blogContent: kandungan,
        blogAuthor: pengarang,
        blogTag: tag,
      },
    });

    if (!updateBook) {
      return {
        statusCode: 500,
        message: "Gagal menyimpan data!",
      };
    }

    return {
      statusCode: 200,
      message: "Berhasil menyimpan data",
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Masalah pada server",
    };
  }
});
