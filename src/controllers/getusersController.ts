import  prismaClient from '../prisma/index'
import { Response,Request }  from 'express'

class GetUserController {

    async execute(request:Request,response:Response ){

        try{
            const medico = await prismaClient.medico.findMany({
                include:{
                    user: true
                }
            });
            const paciente = await prismaClient.paciente.findMany({
                include:{
                    user:true
                }
            });
            const resultado = {
                medico,
                paciente
            }
            
            
            return response.json(resultado)
    
            
        }catch(err) {  return err.message }

        

    }


}
export {GetUserController}