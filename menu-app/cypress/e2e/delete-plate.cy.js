// beforeEach(() => {
//   cy.visit("/");
// });

describe("deleting a plate", () => {
  it("Deletes Recife", () => {
    cy.visit("/10");
    cy.intercept(
      {
        method: "DELETE",
        url: "menu/10",
      },
      { fixture: "menu.json" }
    ).as("apiDeleteCheck");

    cy.findByRole("button", { name: "Delete Plate" }).click();

    cy.wait("@apiDeleteCheck").then((interception) => {
      cy.log(interception);
    });
    // cy.findByRole("button", { name: "Delete Plate" }).click();
    // cy.url().should("eq", "http://localhost:3000/");
  });
});
