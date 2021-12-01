import  prismaClient from '../prisma/index'

class BuscarPublicacoesService {

    async execute( ){

        try{
            const publicacao = await prismaClient.publicacao.findMany();
            
            
            return publicacao
    
            
        }catch(err) {  return err.message }

        

    }


}
export {BuscarPublicacoesService}