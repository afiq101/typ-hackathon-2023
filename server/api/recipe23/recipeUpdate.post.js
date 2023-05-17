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
        recipeid: recipeId,
        recipename: recipeName,
        recipeingredient: recipeIngredient,
        recipeduration: recipeDuration,
        recipespicy: recipeSpicy,
        recipecountry: recipeCountry,
    } = await  readBody(event);

    console.log(" Details: " , recipeId, recipeName, recipeIngredient, recipeDuration, recipeSpicy, recipeCountry)
    if(!recipeId || !recipeName || !recipeIngredient || !recipeDuration || !recipeSpicy || !recipeCountry){
        return{
            statusCode: 500,
            message:"Name, sinopsis dan pengarang perlu diisi",
        }
    }

    const updateRecipe = await prisma.recipe23recipe.update({
        where: {
            recipeId: parseInt(recipeId),
        },
        data : {
            recipeName : recipeName,
            ingredient : recipeIngredient,
            duration : recipeDuration,
            spicy : recipeSpicy,
            country : recipeCountry,
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