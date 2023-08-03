import { Router } from "express";
import {
  usuariosDelete,
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
} from "../controllers/usuarios.js";

export const router = Router();

router.get("/", usuariosGet);

router.put("/:id", usuariosPut);

router.post("/", usuariosPost);

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);
