import {Request,Response} from  'express'
import {SeguirMedicoService} from '../services/SeguirMedicoService'
 
class SeguirMedicoController{
    

    async handle(request:Request, response:Response){
    try{
        const service = new SeguirMedicoService();
        const {user_id} = request.body
        const {medico_userId} = request.body
        const {paciente_userId} = request.body


        const resposta = await service.execute(user_id,medico_userId,paciente_userId);
        return response.json(resposta)

    }catch (err : any){
        return response.json({
            err : err.message,
        })

    }
        

    }

}
export {SeguirMedicoController}