import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // bookName, bookSynopsis, bookAuthor

  try {
    // New way
    const {
      petName: nama,
      petType: type,
      petBreed: breed,
      petDescription: description,
      vaccinationStatus: vaccstatus,
      dewormStatus: deworm,
      petGender: gender,
      petLocation: location,
      petHealth: health,
      petStatus: petstatus,
      petFee: fee,
      petColor: color,
      petImage: petimg,
    } = await readBody(event)

    console.log("aum", readBody(event))

    console.log("nama : ", nama)

    const insertPet = await prisma.pet.create({
      data: {
        petName: nama,
        petType: type,
        petBreed: breed,
        petDescription: description,
        vaccinationStatus: vaccstatus,
        dewormStatus: deworm,
        petGender: gender,
        petLocation: location,
        petHealth: health,
        petStatus: petstatus,
        petFee: fee,
        petColor: color,
        petImage: petimg,
      },
    })
    console.log(insertPet)

    if (!insertPet) {
      return {
        statusCode: 500,
        message: "Gagal menyimpan data",
        insertPet,
      }
    }

    return {
      statusCode: 200,
      message: "Berhasil menyimpan data",
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      message: "Masalah pada server",
    }
  }
})
