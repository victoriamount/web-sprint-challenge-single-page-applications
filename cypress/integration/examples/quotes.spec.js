
const localHost = 'http://localhost:3001/pizza';


describe('Pizza App', () => {

    beforeEach(() => {
        cy.visit(localHost);
    })

    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select[name="size"]')
    const pepperoniInput = () => cy.get('input[name="pepperoni"]')
    const olivesInput = () => cy.get('input[name="olives"]')
    const sausageInput = () => cy.get('input[name="sausage"]')
    const peppersInput = () => cy.get('input[name="peppers"]')
    const instructionsInput = () => cy.get('input[name="instructions"]')
    const submitButton = () => cy.get('#submitButton')

    it('sanity checks', () => {
        expect(2+3).to.equal(5)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })

    it('the proper elements exist', () => {
        nameInput().should('exist')
        sizeInput().should('exist')
        pepperoniInput().should('exist')
        olivesInput().should('exist')
        sausageInput().should('exist')
        peppersInput().should('exist')
        instructionsInput().should('exist')
    })

    it('can add text to the boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Sterling')
            .should('not.have.value', '')
            .should('have.value', 'Sterling')
        instructionsInput()
            .should('have.value', '')
            .type('Extra crispy')
            .should('have.value', 'Extra crispy')
    })

    it('can select multiple toppings', () => {
        pepperoniInput().should('not.be.checked')
        olivesInput().should('not.be.checked')
        sausageInput().should('not.be.checked')
        peppersInput().should('not.be.checked')
        pepperoniInput().click()
        olivesInput().click()
        sausageInput().click()
        peppersInput().click()
        pepperoniInput().should('be.checked')
        olivesInput().should('be.checked')
        sausageInput().should('be.checked')
        peppersInput().should('be.checked')
        sausageInput().click()
        pepperoniInput().should('be.checked')
        sausageInput().should('not.be.checked')
    })

    it('size can be selected', () => {
        sizeInput().should('have.value', '')
        sizeInput().select('small')
        sizeInput().should('have.value', 'small')
        sizeInput().should('not.have.value', 'large')

    })

    it('the form can be submitted, and then the form resets', () => {
        nameInput()
            .type('Sterling')
        instructionsInput()
            .type('Extra crispy')
        sizeInput().select('small')
        pepperoniInput().click()
        olivesInput().click()
        sausageInput().click()
        peppersInput().click()
        submitButton().click()
        nameInput()
            .should('have.value', '')
        sizeInput().should('have.value', '')
        pepperoniInput().should('not.be.checked')
        olivesInput().should('not.be.checked')
        sausageInput().should('not.be.checked')
        peppersInput().should('not.be.checked')
        instructionsInput()
            .should('have.value', '')
    })


})

// test that you can add text to the box
// test that you can select multiple toppings
// test that you can submit the form