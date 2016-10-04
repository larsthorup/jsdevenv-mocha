describe('app', function () {
  describe('render', function () {
    beforeEach(function () {
      this.context = document.createDocumentFragment();
    });

    it('should greet the world', function () {
      window.app.render(this.context);
      this.context.innerHTML.should.equal('<span>Hello World :)</span>');
    });
  });
});