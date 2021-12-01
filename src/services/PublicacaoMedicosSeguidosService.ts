import PrismaClient  from '../prisma/index'

class PublicacaoMedicosSeguidosService {
   
    async execute(user_id : string){
        const medicosIDuser =[];
        const postagensMedicos =[];
        const medicosSeguidos = await PrismaClient.seguirMedico.findMany({
            where:{
                userId:user_id
                

            },
            include:{
                medico:true,
            }
            
        })
        for(let i = 0; i< medicosSeguidos.length; i++){
            medicosIDuser.push(medicosSeguidos[i].medico.userId)
        }
        for(let i = 0; i< medicosIDuser.length; i++){
            const postagem = await PrismaClient.publicacao.findMany({
                where:{
                    userId: medicosIDuser[i]
                },
                include:{
                    user:true
                }
            })
            postagensMedicos.push(postagem)
            
        }



        return postagensMedicos

    }

}

export {PublicacaoMedicosSeguidosService}