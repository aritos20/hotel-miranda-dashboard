describe('Login test', () => {
	it('Login succesfull', () => {
		cy.visit('http://localhost:3000/hotel-miranda-dashboard');
		cy.url().should("include", "/login");
		cy.get('.username').type('admin');
		cy.get('.email').type('admin@admin.com');
		cy.get('.password').type('admin');
		cy.get('.button').click();
	});

  	it('Login failed', () => {
	    cy.visit('http://localhost:3000/hotel-miranda-dashboard');
	    cy.url().should("include", "/login");
	    cy.get('.username').type('ad');
	    cy.get('.email').type('admin@adn.com');
	    cy.get('.password').type('admn');
	    cy.get('.button').click();
	    cy.url().should("include", "/login");
	});

	it('Check protected route', () => {
		cy.visit('http://localhost:3000/hotel-miranda-dashboard');
		cy.url().should("include", "/login");
	  	cy.visit('http://localhost:3000/hotel-miranda-dashboard/bookings');
	    cy.url().should("include", "/login");
	});
})
