describe('Example to Demonstrate SQL Database Testing in Cypress', () => {
 
    it('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
    })
 
    it('Input Entries into the table', function () {
        cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (001, "kaviya", "House No. 01", "Helsinki"),
        (002, "malya", "House No. 02", "tokyo"),
        (003, "siva", "House No. 03", "berlin"),
        (004, "vijay", "House No. 04", "Moscow");`).then((result) => {
                expect(result.affectedRows).to.equal(4)
            })
    })
 
    it('Update an Entry into the table and verify', function () {
        cy.task('queryDb', `UPDATE Persons SET FirstName ="kaviyasiva" WHERE City="Moscow"`).then((result) => {
            expect(result.changedRows).to.equal(1)
        })
        cy.task('queryDb', `SELECT FirstName FROM Persons WHERE City="Moscow"`).then((result) => {
            expect(result[0].FirstName).to.equal('kaviyasiva')
        })
    })
 
    it('Verify that there is only one row where the city is tokyo', function () {
        cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City="tokyo"`).then((result) => {
 
            expect(result[0].rowCount).to.equal(1)
        })
    })
 
    it('Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE Persons`).then((result) => {
            expect(result.message).to.equal("")
        })
    })
})

