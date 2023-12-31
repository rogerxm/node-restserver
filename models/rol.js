import { Schema, model } from "mongoose";

const RoleSchema = Schema({
  rol: {
    type: String,
    require: [true, "El rol es obligatorio"],
  },
});

export const Role = model("Role", RoleSchema);
