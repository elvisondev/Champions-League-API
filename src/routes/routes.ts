// * GERENCIADOR DE ROTAS NATIVO DO EXPRESS
import { Router } from 'express'
import { getPlayer } from '../controllers/players-controller'

// * AQUI NO MEU ROUTER EU APONTO PRO MEU CONTROLLER EM VEZ DE MINHA APP

export const ROUTER = Router();

ROUTER.get('/players', getPlayer);