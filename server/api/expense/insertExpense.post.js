import { PrismaClient } from "@prisma/client";
import { now } from "@vueuse/core";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const amount = body.amount;
    const description = body.description;
    const category = body.category;
    const username = body.username;
    try {
        const getID =
            await prisma.$queryRaw`SELECT userID FROM user WHERE userUsername = ${username}`;

        const ID = getID[0].userID;

        const insertExpense = await prisma.expenses.create({
            data: {
                amount: parseDouble(amount),
                description: description,
                categoryID: parseInt(category),
                userId: parseInt(ID),
                createdDate: new Date()
            }
        });

        if (!insertExpense) {
            return {
                statusCode: 500,
                message: "Gagal"
            }
        }
        else {
            return {
                statusCode: 200,
                message: "Berjaya"
            }
        }
    }
    catch (error) {
        console.log(error)
        return error
    }


})