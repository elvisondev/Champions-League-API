// * GERENCIADOR DE ROTAS NATIVO DO EXPRESS
import { Router } from 'express'
import * as playerControll  from '../controllers/players-controller'
import * as clubsControll from "../controllers/clubs-controller"

// * AQUI NO MEU ROUTER EU APONTO PRO MEU CONTROLLER EM VEZ DE MINHA APP

export const ROUTER = Router();

ROUTER.get('/players', playerControll.getPlayer);
ROUTER.get("/players/:id", playerControll.getPlayerByID);

// * Aqui eu vou cadastrar novos players já especificando meu metódo POST e onde eu quero casdastrar esse player;
// * Daqui vamos pro nosso controller criar nossa função, onde eu vou apontar a minha rota
// * Rota aponta para postPlayer que por sua vez aponta pro meu controller
ROUTER.post("/players", playerControll.postPlayer);


// * Aponto minha rota pro meu controller 
ROUTER.delete("/players/:id", playerControll.deletePlayer)


ROUTER.patch("/players/:id", playerControll.updatePlayer)



// * ROTAS PRO MEUS CLUBES

ROUTER.get("/clubs", clubsControll.getClubs)

ROUTER.get("/clubs/:id", clubsControll.getClubsByID)

ROUTER.post("/clubs", clubsControll.postClubs)