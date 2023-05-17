import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

	try {
			//new way
		const {
<<<<<<< HEAD
			stockID: id,
=======
			stockID : id,
>>>>>>> 4971403ee5b80161c87a72d2cf3852cbe60f9ffc
			stockName: name,
			stockType: type,
			stockSize: size,
			stockQuantity: quantity,
			stockTotal: total,
			stockStatus: status
		} = await readBody(event);

		if (!id || !name || !type || !size || !quantity || !total || !status) {
			return {
				statusCode: 400,
				message: "id, name, dan type harus diisi",
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
