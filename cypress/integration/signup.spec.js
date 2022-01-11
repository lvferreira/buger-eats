import signupPage from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("Signup", () => {
  // beforeEach(function(){
  //     cy.fixture('driver').then((newDriver)=> {
  //             this.driver = newDriver
  //     })
  // })

  it("User should be a delivery person", function () {
    // var signup = new SignupPage()

    var driver = signupFactory.driver();

    signupPage.go();
    signupPage.fillForm(driver);
    signupPage.submit();

    const expected_msg =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signupPage.modalContentShouldBe(expected_msg);
  });

  it("Invalid document", function () {
    // var signup = new SignupPage()

    var driver = signupFactory.driver();

    driver.cpf = "3234918708B";

    signupPage.go();
    signupPage.fillForm(driver);
    signupPage.submit();

    const error_msg = "Oops! CPF inválido";
    signupPage.alertErrorShouldBe(error_msg);
  });

  it("Invalid email", function () {
    // var signup = new SignupPage()

    var driver = signupFactory.driver();

    driver.email = "user.mail.io";

    signupPage.go();
    signupPage.fillForm(driver);
    signupPage.submit();

    const error_msg = "Oops! Email com formato inválido.";
    signupPage.alertErrorShouldBe(error_msg);
  });

  context("Required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "cep", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signupPage.go();
      signupPage.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} is requerid`, function () {
        signupPage.alertErrorShouldBe(msg.output);
      });
    });
  });

  //   it("Required fields", function () {
  //     signupPage.go();
  //     signupPage.submit();

  //     signupPage.alertErrorShouldBe("É necessário informar o nome");
  //     signupPage.alertErrorShouldBe("É necessário informar o CPF");
  //     signupPage.alertErrorShouldBe("É necessário informar o email");
  //     signupPage.alertErrorShouldBe("É necessário informar o CEP");
  //     signupPage.alertErrorShouldBe("É necessário informar o número do endereço");
  //     signupPage.alertErrorShouldBe("Selecione o método de entrega");
  //     signupPage.alertErrorShouldBe("Adicione uma foto da sua CNH");
  //   });
});
