import { Router } from "express";
import {
  usuariosDelete,
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
} from "../controllers/usuarios.js";
import { check } from "express-validator";
import {
  emailExiste,
  existeUsuarioPorId,
  rolValido,
} from "../helpers/db_validators.js";
import { validarCampos } from "../middlewares/validar-campos.js";

export const router = Router();

router.get("/", usuariosGet);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    check("rol").custom(rolValido),
  ],
  validarCampos,
  usuariosPut
);

router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser tener más de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),
    // check("rol", "No es un rol permitido").isIn(["ADMIN_ROL", "USER_ROL"]),
    check("rol").custom(rolValido),
    validarCampos,
  ],
  usuariosPost
);

router.delete(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuariosDelete
);

router.patch("/", usuariosPatch);
