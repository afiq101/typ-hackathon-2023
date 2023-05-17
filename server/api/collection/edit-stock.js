import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

	try {
			//new way
		const {
			stockID: id,
			stockName: name,
			stockType: type,
			stockPrice: price
		} = await readBody(event);

		if (!name || !type || !price) {
			return {
				statusCode: 400,
				message: "id, name, dan price harus diisi",
			};
		}

		const updateStock = await prisma.stock.update({
			where: {
				stockID: parseInt(id),
			},
			data: {
				stockName: name,
				stockType: type,
				stockPrice: price
			},
		});

		if (!updateStock){
			return {
				statusCode: 500,
				message: "gagal",
			}
		};
		return {
			statusCode: 200,
			message: "berhasil",
		};

		//console.log("name", name);
		//console.log("type", type);
		//console.log("price", price);

	} catch(error){
		console.log(error);
		return {
			statusCode: 500,
			message: "masalah API",
		};
	}

});
