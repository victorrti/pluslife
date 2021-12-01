import { prisma } from '.prisma/client'
import { response } from 'express'
import prismaClient  from '../prisma/index'

class CreateUserService{
    async execute(name: string, email:string,password:string, tipouser: string){
        
            const useremail = await prismaClient.user.findFirst({
                where:{
                    email:email
                }
            })
            if(!useremail){
                if(tipouser == "sim"){
                    const usuario = await prismaClient.user.create({
                        data:{
                            name:name,
                            email,
                            password,
                            tipouser,
                        }
                       
                    
                        
                    })
                    
                    const user = await prismaClient.user.findFirst({
                        where:{
                            email:email
                        }
                    })
    
                    const medico = await prismaClient.medico.create({
                        data:{
                            userId: user.id
                        },
                        include:{
                            user: true,
                        }
                    })
    
                    return medico;
                }
    
                if(tipouser == "nao"){
                    const usuario = await prismaClient.user.create({
                        data:{
                            name:name,
                            email,
                            password,
                            tipouser,
                        }
                       
                    
                        
                    })
                    
                    const user = await prismaClient.user.findFirst({
                        where:{
                            email:email
                        }
                    })
    
                    const paciente = await prismaClient.paciente.create({
                        data:{
                            userId: user.id
                        },
                        include:{
                            user: true,
                        }
                    })
    
                    return paciente
    
                }
    
    
                
            }
                
        
        

}   

}



export {CreateUserService}
