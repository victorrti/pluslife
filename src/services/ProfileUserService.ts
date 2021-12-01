import { prisma } from ".prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime";
import prismaClient from  "../prisma"

class ProfileUserService {

    async execute(user_id: string){
        const user =  await prismaClient.user.findFirst({
            where:{
                id: user_id
            }
        })
        return  user;

    } }

    export {ProfileUserService};
   

