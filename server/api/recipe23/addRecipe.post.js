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
        recipename : recipeName,
        recipeingredient : recipeIngredient,
        // recipeduration : recipeDuration,
        // recipespicy : recipeSpicy,
        // recipecountry : recipeCountry,
        // userid : userId,
    } = await  readBody(event);

    if(!recipeName || !recipeIngredient){
        return{
            statusCode: 500,
            message:"Recipe Name, Ingredient, Duration, Spicy, Country and User Id" ,
        }
    }

    const addRecipe = await prisma.recipe23recipe.create({
        data : {
            recipeName : recipeName,
            ingredient : recipeIngredient,
            // duration : recipeDuration,
            // spicy : recipeSpicy,
            // country : recipeCountry,
            // userId : userId,
        }
    });

    if(!addRecipe){
        return{
        statusCode: 500,
        message: "Gagal menimpan data",
        }
    }
    return{
        statusCode: 200,message: "Berhasil menyimpan data",
    }

    
})