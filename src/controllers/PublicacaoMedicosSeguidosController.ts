import {Request,Response} from 'express'
import {PublicacaoMedicosSeguidosService} from '../services/PublicacaoMedicosSeguidosService'

class PublicacaoMedicosSeguidosController{
    async handle(request:Request,response:Response){
        const {user_id} = request.body
        const service = new PublicacaoMedicosSeguidosService();

        const resposta = await service.execute(user_id)

        return response.json(resposta)
    }
}

export {PublicacaoMedicosSeguidosController}