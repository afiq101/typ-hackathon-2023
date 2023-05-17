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
			stockStatus: status,
			stockImage: image
		} = await readBody(event);

		if (!name || !type || !size || !quantity || !total || !status) {
			return {
				statusCode: 400,
				message: "Name, type dan size harus diisi",
			};
		}

		const insertStock = await prisma.stock.create({
			data: {
				stockName: name,
				stockType: type,
				stockSize: size,
				stockQuantity: quantity,
				stockTotal: total,
				stockStatus: status,
				stockImage: image
			},
		});

		if (!insertStock){
			return {
				statusCode: 500,
				message: "gagal",
			}
		}
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
			message: "gagal simpan data",
		};
	}

});
