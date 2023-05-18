import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { useUserStore } from "~/stores/user";

export default defineEventHandler(async (event) => {
  const user = useUserStore();


    try {

        const findUser = await prisma.user.findFirst({
            where: {
              userUsername: user.username,
            },
          });

        const pets = await prisma.pet.findMany({
            select: {
                petID: true,
                petName: true,
                petType: true,
                petBreed: true,
                petGender: true,
                petDescription: true,
                petImage: true,
                petStatus: true,
                petLocation: true,
                petHealth: true,
                petFee: true,
                petColor: true,
                vaccinationStatus: true,
                dewormStatus: true,
                keeperID: true,

            },
            where: {
                keeperID: findUser.userID
            }
        });

        if(!pets){
            return {
                statusCode: 400,
                message: "Failed to get data"
            }
        }else{
            return {
                statusCode: 200,
                message: "Success",
                data: pets
            }
        }

    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            message: "Internal Server Error"
        }
    }
});