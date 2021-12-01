import {Response,Request} from 'express'
import { CreateUserService} from '../services/CreateUserService'

class CreateUserController {

    async handle(request: Request, response:Response){
        
            const service = new CreateUserService()
            const {name,email,password,tipouser} = request.body
    
            const resposta = await service.execute(name,email,password,tipouser)
            
            return response.json(resposta);
        
       


    }

}
export {CreateUserController}