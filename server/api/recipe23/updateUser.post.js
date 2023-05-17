import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    // bookName, bookSynopsis, bookAuthor


    // Old way
    // const body = await  readBody(event);
    // const bookName = body.bookName;
    // const bookSynopsis = body.bookSynopsis;
    // const bookAuthor = body.bookAuthor;
    
    // New Way
    const { 
        userIdR : id,
        usernameR : username,
        emailR : email, 
        passwordR : password ,
    } = await  readBody(event);

    if(!id || !username || !email || !password){
        return{
            statusCode: 500,
            message:"username, email dan password perlu diisi",
        }
    }

    const updateUser = await prisma.recipe23recipe.update({
        where: {
            userId: parseInt(id),
        },
        data : {
            userName: username,
            userEmail: email,
            userPassword: password,
        }
    });

    if(!updateRecipe){
        return{
        statusCode: 500,
        message: "Gagal menimpan data",
        }
    }
    return{
        statusCode: 200,message: "Berhasil menyimpan data",
    }

    
})