import { validationResult } from "express-validator";
import { request, response } from "express";

export const validarCampos = (req = request, res = response, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
