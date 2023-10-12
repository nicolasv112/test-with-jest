import { Contacto } from "./contactos";

function checkNewContact(contacto: Contacto) {
  return contacto.first_name != "" && contacto.last_name != "";
}
export { checkNewContact };
