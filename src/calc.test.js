var calc = window.calc;

describe('calc', function () {
  describe('add', function () {
    it('should sum 2 and 3 to 5', function () {
      calc.add(2, 3).should.equal(5);
    });
  });

  describe('reverse', function () {
    it('should turn the array upside down', function () {
      calc.reverse([1, 2, 3]).should.deep.equal([3, 2, 1]);
    });
  });

  describe('divide', function () {
    it('should verify approximately one third', function () {
      calc.divide(5, 3).should.be.approximately(1.66, 0.01);
    });

    describe('broken precondition', function () {
      it('should throw an Error', function () {
        (function () { calc.divide(1, 0); }).should.throw('Cannot divide by zero');
      });
    });
  });

  describe('addSlow', function () {
    it('should eventually sum 2 and 3 to 5', function (done) {
      calc.addSlow(2, 3, function (result) {
        result.should.equal(5);
        done();
      });
    });
  });

  describe('adding', function () {
    it('should eventually sum 2 and 3 to 5', function () {
      return calc.adding(2, 3).then(function (result) {
        result.should.equal(5);
      });
    });
  });
});