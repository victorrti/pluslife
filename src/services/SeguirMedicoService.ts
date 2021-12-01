import prismaClient from "../prisma";

class SeguirMedicoService{

    async execute(user_id: string, medico_Userid: string,paciente_Userid: string ){
        const seguirmedico =  prismaClient.seguirMedico.create({
            data:{
                userId:user_id,
                medicoId:medico_Userid,
                pacienteId: paciente_Userid

            }
            
            
        })

        return seguirmedico;

    }

}

export {SeguirMedicoService}