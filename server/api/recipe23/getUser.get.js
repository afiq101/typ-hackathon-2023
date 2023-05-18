import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// // Database mawardb
// const prisma_mawardb = new PrismaClient({
//   datasources: { db: { url: process.env.DATABASE_URL } },
// });

// // Database main_app
// const prisma_main_app = new PrismaClient({
//   datasources: { db: { url: process.env.DATABASE_URL_2 } },
// });

export default defineEventHandler(async (event) => {
    try{
        const { userId: id } = await getQuery(event);

        const getUser = await prisma.recipe23user.findUnique({
            where: {    
                userId: parseInt(id),
            },
            select: {
                userId: true,
                userName: true,
                userEmail: true,
                userPassword: true,
            }
        })
        return{
            statusCode: 200,
            message: "Berhasil mengeluarkan data",
            data: getUser,
        };
    }
    catch(error){
        console.log(error);
        return{
            statusCode: 500,
            message: "Gagal mengeluarkan data",
        };y
    }
})