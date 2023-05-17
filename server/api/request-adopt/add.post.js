import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {

        const body = await readBody(event);

        if (!body.ownerName | !body.dateAppointment || !body.ownerEmail || !body.ownerAddress || !body.ownerPhone) {
            return {
                statusCode: 400,
                message: "Missing required information"
            }
        }

        const findKeeper = await prisma.pet.findMany({
            where: {
                petID: body.adoptPetId
            }
        });

        console.log("findKeeper : ", findKeeper);

        const insertAdopt = await prisma.requestAdoption.create({
            data: {
                requestAdoptionOwnerName: body.ownerName,
                requestAdoptionOwnerEmail: body.ownerEmail,
                requestAdoptionOwnerPhone: body.ownerPhone,
                requestAdoptionOwnerAddress: body.ownerAddress,
                requestAdoptionStatus: "Active",
                requestAdoptionDateAppointment: body.dateAppointment,
                requestAdoptionCreatedDate: new Date(),
                requestAdoptionModifiedDate: new Date(),
                requestAdoptionPetID: body.adoptPetId,
                requestAdoptionKeeperID: findKeeper[0].keeperID,
            }
        });

        if (!insertAdopt) {
            return {
                statusCode: 400,
                message: "Failed to insert data"
            }
            
        }else{
            console.log("Success");
            return {
                statusCode: 200,
                message: "Success"
            }
        }
    }catch(error) {
        console.log(error);
    }

});