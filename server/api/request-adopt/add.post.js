import { PrismaClient } from "@prisma/client";
import moment from "moment";

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

        // const appointmentTime = moment(body.dateAppointment + " " + body.timeAppointment, "YYYY-MM-DD HH:mm:ss").tz('Asia/Kuala_Lumpur');

        let datetime = moment(body.dateAppointment + " " + body.timeAppointment, "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");

        console.log("date appointment : ", body.dateAppointment);
        console.log("time appointment : ", body.timeAppointment);

        console.log("datetime : ", datetime);

        const insertAdopt = await prisma.requestAdoption.create({
            data: {
                requestAdoptionOwnerName: body.ownerName,
                requestAdoptionOwnerEmail: body.ownerEmail,
                requestAdoptionOwnerPhone: body.ownerPhone,
                requestAdoptionOwnerAddress: body.ownerAddress,
                requestAdoptionStatus: "Active",
                requestAdoptionDateAppointment: new Date(datetime),
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

        } else {
            console.log("Success");
            return {
                statusCode: 200,
                message: "Success"
            }
        }
    } catch (error) {
        console.log(error);
    }

});