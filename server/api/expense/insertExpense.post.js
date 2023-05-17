import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const bookName = body.bookName;
    const bookSynopsis = body.bookSynopsis;
    const bookAuthor = body.bookAuthor;

    if(!bookName)
    {
        return{
            statusCode: 400,
            message:"Nama X da",
        }
    }

    else
    {
        const insertBook = await prisma.book.create({
            data:{
                bookName: bookName,
                bookSynopsis: bookSynopsis,
                bookAuthor: bookAuthor,
            }
        });

        if(!insertBook)
        {
            return {
                statusCode: 500,
                message: "Gagal"
            }
        }
        else
        {
            return{
                statusCode:200,
                message:"Berjaya"
            }
        }
    }
    console.log(bookName)
})