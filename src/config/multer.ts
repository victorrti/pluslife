import { request } from 'express';
import multer from  'multer'
import path from 'path'
import crypto from  'crypto'

const tmpfolder = path.resolve(__dirname,'..','..','tmp');

export default {
    directory:tmpfolder,
    storage: multer.diskStorage( {
        destination: tmpfolder,
        filename(request,file,callback){
            const filehash = crypto.randomBytes(10).toString('hex');
            const filename = `${filehash}-${file.originalname}`

            return callback(null,filename);
        }
    }),

}