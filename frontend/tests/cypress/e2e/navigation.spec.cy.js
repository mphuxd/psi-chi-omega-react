describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has anchor tags", () => {
    cy.visit("http://localhost:3000/");
    cy.get("main").find("a").should("not.have.attr", "href", "#undefined");
  });
});
