beforeEach(() => {
  cy.visit("/add-plate");
});

describe("Adding plate", () => {
  it("With no name", () => {
    cy.get("form").within(() => {
      // at first both input elements are invalid
      cy.get("input:invalid")
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill out this field.");
    });
  });

  it("With no ingredients", () => {
    const newPlate = {
      name: "TestOne",
      vovofav: "yes",
    };

    cy.get("#namePlate").type(newPlate.name);
    // Check first radio element
    cy.get('[type="radio"]').first().check(newPlate.vovofav);

    // Submit the form
    cy.findByRole("button", { name: "Submit" }).click();

    //After it submits, it should alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Add Ingredients`);
    });

    //In homepage, the new data should be added in the table
  });
});
