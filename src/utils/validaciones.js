export const validacionTexto = {
  required: "La descripción del post es obligatoria.",
  minLength: {
    value: 10,
    message: "La descripción del post es demasiado corta",
  },
  maxLength: {
    value: 1000,
    message: "La descripción es demasiado larga",
  },
};
