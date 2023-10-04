describe("First Test", () => {
	it("Should navigate to the dashboard", () => {
		cy.visit("http://localhost:4200/");
		cy.url().should("include", "/dashboard");
		cy.get("app-dashboard").should("exist");
	});

	it("Should navigate to the client page", () => {
		cy.visit("http://localhost:4200/clients");
		cy.url().should("include", "/clients");
		cy.get("app-clients").should("exist");
	});

	it("Should navigate to the users page", () => {
		cy.visit("http://localhost:4200/users");
		cy.url().should("include", "/users");
		cy.get("app-users").should("exist");
	});

	it("Should navigate to the campaigns page", () => {
		cy.visit("http://localhost:4200/campaigns");
		cy.url().should("include", "/campaigns");
		cy.get("app-campaigns").should("exist");
	});
});
