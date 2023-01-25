describe("template spec", () => {
  const newPlate = {};
  it("passes", () => {
    cy.visit("http://localhost:3000/add-plate");
    // Get an input, type into it
    cy.get("#namePlate").type("TestOne");
    // Check checkbox options
    cy.get('[type="checkbox"]').check(["salmon", "rice", "spring mix"]);
    // Check first radio element
    cy.get('[type="radio"]').first().check();
    //Submit the form
    cy.contains("Submit").click();
    //After it submits, it should redirect back to homepage
    cy.url().should("eq", "http://localhost:3000/");
    //In homepage, the new data should be added in the table
  });
});
