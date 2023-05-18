import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {

        const { petID: id } = await getQuery(event);


        const pets = await prisma.pet.findUnique({
            where: {
                petID: parseInt(id)
            },
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
        });


        if (!pets) {
            return {
                statusCode: 400,
                message: "Failed to get data"
            }
        } else {
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