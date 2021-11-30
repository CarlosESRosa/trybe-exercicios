const { uppercase } = require('./exercicio7');

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (param) => {
    try {
      expect(param).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});