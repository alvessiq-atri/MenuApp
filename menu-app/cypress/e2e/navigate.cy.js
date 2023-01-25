beforeEach(() => {
  cy.visit("/");
});

it("Navigates to Add Plate", () => {
  cy.findByRole("link", { name: "Add New Plate" }).click();
  cy.url().should("include", "/add-plate");
});

describe("Navigate to Edit Manaus", () => {
  it("Clicks on Edit Manaus", () => {
    cy.intercept("/menu", { fixture: "menu.json" });
    cy.findByRole("link", { name: "Edit Manaus" }).click();
    cy.url().should("include", "/3");
  });

  // context("getting the plateId", () => {
  //   beforeEach(() => {
  //     cy.get("table")
  //       .find("tr")
  //       .find("td")
  //       .then(($td) => {
  //         const plateId = $td.first().text();
  //         cy.log(plateId);
  //         cy.wrap(plateId).as("id");
  //       });
  //     // cy.wrap("two").as("b");
  //   });

  //   context("Adding plateId to end of url", () => {
  //     it("can access all aliases as properties", function () {
  //       cy.contains("Edit").click();
  //       // expect(this.id).to.eq("1");
  //       cy.url().should("include", "/" + this.id);
  //     });
  //   });
  // });
});
