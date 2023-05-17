import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try{
        const recipeList = await prisma.recipe23recipe.findMany({
            select:{
                recipeName: true,
                ingredient: true,
            }
        })
        return{
            statusCode: 200,
            message: "Berhasil mengeluarkan data",
            data: recipeList,
        };
    }
    catch(error){
        console.log(error);
        return{
            statusCode: 500,
            message: "Gagal mengeluarkan data",
            data: recipeList,
        };
    }
})