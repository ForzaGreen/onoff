const expect = require('chai').expect;

describe('Account', () => {
    before(() => {
        console.log("Sth before tests");
    });

    it('Simple Account', (done) => {
        expect(true).to.be.true;
        done();
    });
});