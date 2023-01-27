describe("Checks homepage", () => {
  const columns = ["ID", "Name", "Vovos Fav", "Ingredients", "Button"];
  it("Shows Homepage", () => {
    cy.visit("/");
    cy.intercept(
      {
        method: "GET",
        url: "/menu",
      },
      { fixture: "menu.json" }
    ).as("apiGetMenu");
    cy.wait("@apiGetMenu").its("response.statusCode").should("eq", 200);
    cy.contains("MENU");
    columns.map((item) => {
      cy.contains(item);
    });
  });
});
