import { agregarContacto } from "../src/agregarContacto";
import { eliminarContacto } from "../src/eliminarContacto";
import { Contacto, contactos } from "../src/contactos";

describe("eliminarContacto", () => {
  test("tras eliminar un contcto la longitud de la lista se reduce en uno", () => {
    const tamanio = contactos.length;
    const contactosEliminado: Contacto[] = eliminarContacto({
      apellido: "Alderwick",
    });
    expect(contactosEliminado.length).toBe(tamanio - 1);
  });

  test("tras eliminar un contcto que no existe, la lista deberia tener la misma longitud", () => {
    const tamanio = contactos.length;
    const contactosEliminado: Contacto[] = eliminarContacto({
      apellido: "messi",
    });
    expect(contactosEliminado.length).toBe(tamanio);
  });
});

describe("agregarContacto", () => {
  test("Al agregar un contacto la lista deberia tener un elemento mas", () => {
    const tamanio = contactos.length;
    let c = {
      id: 18,
      first_name: "Nico",
      last_name: "Villarroel",
      email: "malderwick0@google.es",
      gender: "Male",
      ip_address: "129.91.139.60",
    };
    const contactoAgregado: Contacto[] = agregarContacto(c);
    expect(contactoAgregado.length).toBe(tamanio + 1);
  });

  test("Verificar que la informacion del contacto se guardo correctamente", () => {
    let c = {
      id: 180,
      first_name: "Nico",
      last_name: "Villarroel",
      email: "malderwick0@google.es",
      gender: "Male",
      ip_address: "129.91.139.60",
    };
    const contactoAgregado: Contacto[] = agregarContacto(c);
    const contactoNuevo = contactoAgregado[contactoAgregado.length - 1];
    expect(contactoNuevo.id).toBe(180);
  });
});
