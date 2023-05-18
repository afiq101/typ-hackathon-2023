import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { useUserStore } from "~/stores/user";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const user = useUserStore();

    try {
        const findUser = await prisma.user.findFirst({
            where: {
                userUsername: user.username,
            },
        });

        const body = await readBody(event);

        if (!body.dateAppointment) {
            return {
                statusCode: 400,
                message: "Missing required information"
            }
        }

        const findKeeper = await prisma.pet.findFirst({
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
                requestAdoptionStatus: "Pending",
                requestAdoptionDateAppointment: new Date(datetime),
                requestAdoptionCreatedDate: new Date(),
                requestAdoptionModifiedDate: new Date(),
                requestAdoptionPetID: body.adoptPetId,
                keeperIDRequest: findUser.userID,
                keeperIDReceived: findKeeper.keeperID,
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