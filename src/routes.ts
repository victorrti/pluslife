import {Router} from "express";
import multer from 'multer'

import { CreatePublicacaoController } from "./controllers/CreatePublicacaoController";
import { ensureAuthenticated } from "./midlleware/ensureAuthenticated";
import { ProfileUserController} from './controllers/ProfileUserController'

import { SeguirMedicoController} from './controllers/SeguirMedicoController'

import {CreateUserController} from './controllers/CreateUserController'
import {LoginController} from './controllers/LoginController'
import {BuscarPublicacaoController} from './controllers/BuscarPublicacaoController'
import { GetUserController } from './controllers/getusersController'
import { PublicacaoMedicosSeguidosController } from './controllers/PublicacaoMedicosSeguidosController'

import multerconfig from './config/multer'

//------------------------------------------------------------------------------
const createPublicacaoController = new CreatePublicacaoController(); 
const profileUserController = new ProfileUserController();

const seguirMedicoController = new SeguirMedicoController();

//-------------------------------------------------------------------------------

const createUserController = new CreateUserController();
const loginController = new LoginController();
const buscarPublicacaoController = new BuscarPublicacaoController();
const getUserController = new GetUserController()
const publicacaoMedicosSeguidosController = new PublicacaoMedicosSeguidosController()

const upload = multer(multerconfig)

const router = Router();

router.post('/createuser',createUserController.handle)
router.get('/login', loginController.handle)
router.get('/publicacoes', buscarPublicacaoController.handle)
router.get("/user",getUserController.execute)
router.get("/seguidos",publicacaoMedicosSeguidosController.handle)







router.post("/publicacao",createPublicacaoController.handle)





router.post("/seguirmedico",seguirMedicoController.handle)

router.get("/profile",ensureAuthenticated, profileUserController.handle)


export {router};