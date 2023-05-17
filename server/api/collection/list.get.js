import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		const stocks = await prisma.stock.findMany({
			select: {
				stockID: true,
				stockName: true,
				stockType: true,
				stockSize: true,
				stockQuantity: true,
				stockTotal: true,
				stockStatus: true,
				stockImage: true
			},
		});

		return {
			statusCode: 200,
			message: "berhasil",
			data: stocks,
		};
	} catch(error) {

		console.log(error);
		return {
			statusCode: 500,
			message: "gagal",
		};
	}

});