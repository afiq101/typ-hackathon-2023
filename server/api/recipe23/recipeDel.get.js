import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {


  const body = await getQuery(event);

  const id = body.recipeId;

  if (!id) {
    return {
      statusCode: 500,
      message: "Recipe Id is required",
    };
  }

  const deleteRecipe = await prisma.recipe23recipe.delete({
    where: {
      recipeId: parseInt(id),
    },
  });
  

  if (!deleteRecipe) {
    return {
      statusCode: 500,
      message: "Fail to delete recipe",
      data: deleteRecipe,
    };
  }

  return {
    statusCode: 200,
    message: "Success to delete recipe",
    data: deleteRecipe,
  };
});