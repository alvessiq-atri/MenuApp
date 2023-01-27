describe("Adding plate", () => {
  it("Checks all of the fields", () => {
    const newPlate = {
      name: "TestOne",
      ingredients: ["salmon", "rice", "spring mix"],
      vovofav: "yes",
    };
    cy.visit("/add-plate");
    // Get an input, type into it
    cy.get("#namePlate").type(newPlate.name);

    // Check checkbox options
    cy.get('[type="checkbox"]').check(newPlate.ingredients);
    // Check first radio element
    cy.get('[type="radio"]').check(newPlate.vovofav);

    cy.intercept(
      {
        method: "POST",
        url: "/menu",
      },
      { fixture: "menu.json" }
    ).as("apiPostCheck");

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

    //In homepage, the new data should be added in the table
  });
});
