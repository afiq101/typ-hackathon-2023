import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
import { useUserStore } from "~/stores/user";

export default defineEventHandler(async (event) => {
  // bookName, bookSynopsis, bookAuthor
  const user = useUserStore();

  try {
    const findUser = await prisma.user.findFirst({
      where: {
        userUsername: user.username,
      },
    });

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
        petImage: petimg.length == 0 ? 'oyen.jpg' : petimg,
        keeperID: findUser.userID,
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
