import menu from "../fixtures/menu.json";

// cy.fixture('user').then((userFixture) => {
//   expect(user, 'the same data').to.deep.equal(userFixture)
// })

beforeEach(() => {
  cy.visit("/");
  cy.intercept(
    {
      method: "GET",
      url: "/menu",
    },
    { fixture: "menu.json" }
  ).as("apiGetMenu");
  cy.wait("@apiGetMenu").its("response.statusCode").should("eq", 200);
  cy.wait("@apiGetMenu").then((interception) => {
    assert.isNotNull(interception.response.body, "");
    cy.log(interception.response.body);
    cy.log(menu);
    // expect(interception.response.body).to.equal(menu);
    interception.response.body.forEach((plates, index) => {
      expect(plates.id).to.equal(menu[index].id);
      expect(plates.name).to.equal(menu[index].name);
      expect(plates.vovofav).to.equal(menu[index].vovofav);

      plates.ingredients.forEach((ingredient, idx) => {
        expect(ingredient).to.equal(menu[index].ingredients[idx]);
      });
    });
  });
});

it("Navigates to Add Plate", () => {
  cy.findByRole("link", { name: "Add New Plate" }).click();
  cy.url().should("include", "/add-plate");
});

describe("Navigate to Edit Manaus", () => {
  it("Clicks on Edit Manaus", () => {
    cy.intercept("/menu/*", { fixture: "menu.json" });
    cy.findByRole("link", { name: "Edit Manaus" }).click();
    cy.url().should("include", "/3");
  });
});
