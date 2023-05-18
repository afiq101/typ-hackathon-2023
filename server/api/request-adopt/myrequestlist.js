import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const prisma_mawardb = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL } },
})

export default defineEventHandler(async (event) => {
  try {
    const myrequest =
      await prisma_mawardb.$queryRaw`SELECT a.requestAdoptionID, b.petName, d.keeperName AS receivedKeeperName,
      a.requestAdoptionDateAppointment,
      a.requestAdoptionStatus
      FROM requestAdoption a
      LEFT JOIN pet b ON a.requestAdoptionPetID = b.petID
      LEFT JOIN keeper c ON a.keeperIDRequest = c.keeperID
      LEFT JOIN keeper d ON a.keeperIDReceived = d.keeperID
      WHERE c.keeperID = 1`

    console.log(myrequest)

    if (!myrequest) {
      return {
        statusCode: 400,
        message: "Failed to get data",
      }
    } else {
      return {
        statusCode: 200,
        message: "Success",
        data: myrequest,
      }
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 500,
      message: "Internal Server Error",
    }
  }
})
