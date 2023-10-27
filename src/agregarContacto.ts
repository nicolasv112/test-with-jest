import { Contacto, contactos } from "./contactos";

const agregarContacto = (contacto: Contacto) => {
  contactos.push(contacto);
  return contactos;
};

export { agregarContacto };
