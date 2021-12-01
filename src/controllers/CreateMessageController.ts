/*import { AuthenticateUserService } from "../services/AuthenticateUserService";
import express from "express";
import { CreateMessageService } from "../services/CreateMessageService";
import prismaClient from "../prisma";


class CreateMessageController{
    async  handle(request : express.Request, response : express.Response){

        try{
            const {text} = request.body;
            const { user_id } = request;
                       
            const service = new CreateMessageService();

            const result = await service.execute(text, user_id);
           

            return response.json(result)
        } catch (err : any){
            return response.json({
                err : err.message,
            })

        }
          

    }

     async retornarMenssagens(request : express.Request, response : express.Response){
         try{
             const message = await prismaClient.message.findMany()

             return  response.json(message)

         }catch(err :any){
            return response.json({
                err : err.message
            })
         }

     }
}

export {CreateMessageController} */