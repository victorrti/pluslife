import {Response,Request} from 'express'
import {BuscarPublicacoesService} from '../services/BuscarPublicacoesService'

class BuscarPublicacaoController {
    async handle(request:Request, response:Response){
        const  service = new BuscarPublicacoesService();
        const resposta = await service.execute()
        return response.json(resposta);

    }

}
export {BuscarPublicacaoController}