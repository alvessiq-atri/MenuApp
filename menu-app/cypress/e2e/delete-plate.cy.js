beforeEach(() => {
  cy.intercept(
    {
      method: "GET",
      url: "/menu/10",
      times: 1,
    },
    { fixture: "menu.json" }
  ).as("apiGetMenu10");
  cy.visit("/10");
});

describe("deleting a plate", () => {
  it("Deletes Recife", () => {
    cy.intercept(
      {
        method: "DELETE",
        url: "/menu/10",
      },
      { fixture: "menu.json" }
    ).as("apiDeleteCheck");

    cy.intercept(
      {
        method: "GET",
        url: "/menu",
      },
      { fixture: "menu.json" }
    );

    cy.findByRole("button", { name: "Delete Plate" }).click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
