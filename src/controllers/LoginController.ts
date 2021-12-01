import {Request,Response} from 'express'

import {LoginService} from '../services/LoginService'

class LoginController {
    async handle(request:Request,response:Response){
        const service = new LoginService()
        
        const {email,password} = request.body
        
        const resposta = await service.execute(email,password);

        return response.json(resposta);

    }

}

export {LoginController}