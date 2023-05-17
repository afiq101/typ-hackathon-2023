import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import sha256 from "crypto-js/sha256.js";

export default defineEventHandler(async (event) => {
    try {

        let secretKey = generateSecretKey();
        const body = await readBody(event);

        if (!body.keeperName | !body.keeperUsername || !body.keeperPassword || !body.keeperEmail || !body.keeperPhone || !body.keeperAddress) {
            return {
                statusCode: 400,
                message: "Missing required information"
            }
        }

        const findUser = await prisma.user.findMany({
            where: {
                userUsername: body.keeperUsername
            }
        });

        if (findUser.length > 0) {
            return {
                statusCode: 400,
                message: "Username already exists"
            }
        }


        let password = sha256(body.keeperPassword).toString();

        const insertKeeper = await prisma.keeper.create({
            data: {
                keeperName: body.keeperName,
                keeperUsername: body.keeperUsername,
                keeperPassword: password,
                keeperEmail: body.keeperEmail,
                keeperPhone: body.keeperPhone,
                keeperAddress: body.keeperAddress,
                keeperStatus: "Active",
                keeperCreatedDate: new Date(),
                keeperModifiedDate: new Date()
            }
        });

        const insertUser = await prisma.user.create({
            data: {
                userSecretKey: secretKey,
                userUsername: body.keeperUsername,
                userPassword: password,
                userFullName: body?.keeperName || "",
                userEmail: body?.keeperEmail || "",
                userPhone: body?.keeperPhone || "",
                userStatus: "ACTIVE",
                userCreatedDate: new Date(),
            },
        });

        const userRole = await prisma.userrole.create({
            data: {
                userRoleUserID: insertUser.userID,
                userRoleRoleID: 4,
                userRoleCreatedDate: new Date(),
            },
        });


        if (!insertKeeper) {
            return {
                statusCode: 500,
                message: "Error creating keeper"
            }
        } else {
            console.log("Keeper created successfully");
            return {
                statusCode: 200,
                message: "Keeper created successfully"
            }
        }

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            message: "Error creating keeper"
        };
    }
});


function generateSecretKey() {
    //   Generate Secret Key number and alphabet. Format : xxxx-xxxx-xxxx-xxxx
    let secretKey = "";
    let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            secretKey += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        if (i < 3) {
            secretKey += "-";
        }
    }

    return secretKey;
}