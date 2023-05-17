import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import sha256 from "crypto-js/sha256.js";

export default defineEventHandler(async (event) => {
    try {

        let secretKey = generateSecretKey();
        const body = await readBody(event);

        if (!body.ownerName | !body.ownerUsername || !body.ownerPassword || !body.ownerEmail || !body.ownerPhone || !body.ownerAddress) {
            return {
                statusCode: 400,
                message: "Missing required information"
            }
        }

        const findUser = await prisma.user.findMany({
            where: {
                userUsername: body.ownerUsername
            }
        });

        console.log("user : ", findUser);
        if (findUser.length > 0) {
            return {
                statusCode: 400,
                message: "Username already exists"
            }
        }


        let password = sha256(body.ownerPassword).toString();

        const insertOwner = await prisma.owner.create({
            data: {
                ownerName: body.ownerName,
                ownerUsername: body.ownerUsername,
                ownerPassword: password,
                ownerEmail: body.ownerEmail,
                ownerPhone: body.ownerPhone,
                ownerAddress: body.ownerAddress,
                ownerStatus: "Active",
                ownerCreatedDate: new Date(),
                ownerModifiedDate: new Date()
            }
        });

        const insertUser = await prisma.user.create({
            data: {
                userSecretKey: secretKey,
                userUsername: body.ownerUsername,
                userPassword: password,
                userFullName: body?.ownerName || "",
                userEmail: body?.ownerEmail || "",
                userPhone: body?.ownerPhone || "",
                userStatus: "ACTIVE",
                userCreatedDate: new Date(),
            },
        });

        const userRole = await prisma.userrole.create({
            data: {
                userRoleUserID: insertUser.userID,
                userRoleRoleID: 3,
                userRoleCreatedDate: new Date(),
            },
        });


        if (!insertOwner) {
            return {
                statusCode: 500,
                message: "Error creating owner"
            }
        } else {
            console.log("Owner created successfully");
            return {
                statusCode: 200,
                message: "Owner created successfully"
            }
        }

    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            message: "Error creating owner"
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