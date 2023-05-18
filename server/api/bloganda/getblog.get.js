import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {
    try {
        const {bookID: id } = await getQuery(event);

        const getBlog = await prisma.blog.findUnique({
            where:{
                blogID: parseInt(id),
            },
            select: {
                blogID: true,
                blogName: true,
                blogContent: true,
                blogAuthor: true,
            },
        });
        return {
            statusCode: 200,
            message: "Berhasil mendapat data",
            data: getBlog,
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            message: "Masalah server"
        };
    }
})