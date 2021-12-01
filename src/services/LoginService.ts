
import { prisma } from '.prisma/client'
import  prismaClient from '../prisma/index'

class LoginService {

    async execute(email:string,password:string){

        try{
            const usuario = await prismaClient.user.findFirst({
                where:{
                    email:email
                }
            })
            
            
            
    
            if(usuario.email == email && usuario.password == password ){
                if(usuario.tipouser == "sim"){
                    const medico = await prismaClient.medico.findFirst({
                        where:{
                            userId:usuario.id
                        },
                        include:{
                            user:true
                        }
                    })
    
                    return medico;
                
                }else{
                    const paciente = await prismaClient.paciente.findFirst({
                        where:{
                            userId:usuario.id
                        },
                        include:{
                            user:true
                        }
                    })
    
                    return paciente;
    
                }
                 
            }else{
                const message = {
                    message:"senha ou email invalidos"
                }
                return  message
            }
        }catch {  return {message:"email ou senha invalidos"} }

        

    }


}
export {LoginService}