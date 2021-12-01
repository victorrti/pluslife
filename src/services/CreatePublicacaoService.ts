import prismaClient  from '../prisma/index'

class CreatePublicacaoService {
    async execute(text: string, user_id: string, url_image: string){
        const  publicacao = await prismaClient.publicacao.create({
            data: {
                text,
                userId : user_id,
                url_image,
            },
            include: {
                user : true
            }
        });

      
        //io.emit("new_message",infoWS);
        return publicacao;

    }
}

export {CreatePublicacaoService} 