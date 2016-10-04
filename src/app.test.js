var app = window.app;

describe('app', function () {
  describe('render', function () {
    beforeEach(function () {
      this.context = document.createDocumentFragment();
    });

    it('should greet the world', function () {
      app.render(this.context);
      this.context.innerHTML.should.equal('<span>Hey! 4 + 7 = 11</span>');
    });
  });
});