import { request, response } from "express";

export const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};

export const usuariosPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

export const usuariosPost = (req, res) => {
  const body = req.body;

  res.json({
    msg: "post API - controlador",
    body,
  });
};

export const usuariosDelete = (req, res) => {
  res.json({
    msg: "delete API - controlador",
  });
};

export const usuariosPatch = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};
