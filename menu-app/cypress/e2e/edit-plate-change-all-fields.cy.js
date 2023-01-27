beforeEach(() => {
  cy.intercept(
    {
      method: "GET",
      url: "/menu/1",
      times: 1,
    },
    { fixture: "menu.json" }
  ).as("apiGetMenu1");
  cy.visit("/1");

  const newEdit = {
    name: "Rio de Janeiro",
    ingredients: ["egg", "beef", "rice", "french fries"],
    vovofav: "no",
  };

  // Get an input, type into it
  cy.get("#namePlate").type(newEdit.name);

  // Check checkbox options
  cy.get('[type="checkbox"]').check(newEdit.ingredients);
  cy.get('[type="checkbox"]').uncheck(["beans", "spring mix"]);
  // Check first radio element
  cy.get('[type="radio"]').check(newEdit.vovofav);
});

describe("Edit Plate", () => {
  it("Edits all fields", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "/menu/1",
      },
      { fixture: "menu.json" }
    ).as("apiPutCheck");

    cy.intercept(
      {
        method: "GET",
        url: "/menu",
      },
      { fixture: "menu.json" }
    );

    // Submit the form
    cy.findByRole("button", { name: "Submit" }).click();

    //After it submits, it should redirect back to homepage
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("Uncheck all ingredients", () => {
    cy.get('[type="checkbox"]').uncheck();
    // Submit the form
    cy.findByRole("button", { name: "Submit" }).click();

    //After it submits, it should alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Add Ingredients`);
    });

    //In homepage, the new data should be added in the table
  });
});
