import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {

		const { stockID:id } = await getQuery(event);

		const getStock = await prisma.stock.findUnique({
			where: {
				stockID: parseInt(id),
			},
			select: {
				stockID: true,
				stockName: true,
				stockType: true,
				stockPrice: true,
			},
		});

		return {
			statusCode: 200,
			message: "berhasil",
			data: getStock,
		};
	} catch(error) {

		console.log(error);
		return {
			statusCode: 500,
			message: "masalah API",
		};
	}
});