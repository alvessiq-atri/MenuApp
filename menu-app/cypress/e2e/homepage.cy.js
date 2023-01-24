describe("template spec", () => {
  const columns = ["ID", "Name", "Vovos Fav", "Ingredients", "Button"];
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("MENU");
    columns.map((item) => {
      cy.contains(item);
    });
  });
});
