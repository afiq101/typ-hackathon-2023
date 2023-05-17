import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

	try {
			//new way
		const {
			stockName: name,
			stockType: type,
			stockSize: size,
			stockQuantity: quantity,
			stockTotal: total,
			stockStatus: status
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
				stockSize: size,
				stockQuantity: quantity,
				stockTotal: total,
				stockStatus: status
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
