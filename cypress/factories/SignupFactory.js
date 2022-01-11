var faker = require("faker");
var cpf = require("gerador-validador-cpf");

export default {
  driver: function () {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      wpp: "11944932687",
      address: {
        cep: "04534011",
        street: "Rua Joaquim Floriano",
        number: "452",
        complement: "Apt 142",
        district: "Itaim Bibi",
        city: "São Paulo/SP",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };
    return data;
  },
};
