import {CreatePublicacaoService } from "../services/CreatePublicacaoService";

import  {Request,Response} from "express";
import crypto from  "crypto"

import prismaClient from "../prisma";


class CreatePublicacaoController{
    async  handle(request :Request, response : Response){

        try{

            const {text} = request.body;
            const {url_image} = request.body;
            const { user_id } = request.body;
           
                       
            const service = new CreatePublicacaoService();
            


            const result = await service.execute(text, user_id,url_image);
           

            return response.json(result)
        } catch (err : any){
            return response.json({
                err : err.message,
            })

        }
          

    }

     
}

export {CreatePublicacaoController} 