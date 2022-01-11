class SignupPage {
  go() {
    cy.visit("/");

    cy.get('a[href="/deliver"]').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );
  }

  fillForm(driver) {
    // input de dados do entregador
    cy.get('input[name="fullName"]').type(driver.name);
    cy.get('input[name="cpf"]').type(driver.cpf);
    cy.get('input[name="email"]').type(driver.email);
    cy.get('input[name="whatsapp"]').type(driver.wpp);

    // input do cep
    cy.get('input[name="postalcode"]').type(driver.address.cep);
    cy.get('input[type=button][value="Buscar CEP"]').click();

    // input de dados do endereço(número, complemento)
    cy.get('input[name="address-number"]').type(driver.address.number);
    cy.get('input[name="address-details"]').type(driver.address.complement);

    // validação de dados do endereço(rua, bairro, cidade/uf)
    cy.get('input[name="address"]').should("have.value", driver.address.street);
    cy.get('input[name="district"]').should(
      "have.value",
      driver.address.district
    );
    cy.get('input[name="city-uf"]').should("have.value", driver.address.city);

    cy.contains(".delivery-method li", driver.delivery_method).click();
    cy.get('input[accept^="image"]').attachFile("/images/" + driver.cnh);
  }

  submit() {
    cy.get("form button[type=submit]").click();
  }

  modalContentShouldBe(expected_msg) {
    cy.get("div .swal2-html-container").should("have.text", expected_msg);
  }

  alertErrorShouldBe(error_msg) {
    // cy.get('.alert-error').should('have.text', error_msg)
    cy.contains(".alert-error", error_msg).should("be.visible");
  }
}

export default new SignupPage();
