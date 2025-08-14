const soma = require('../src/soma');

test('soma 2 + 3 deve retornar 5', () => {
    expect(soma(2, 3)).toBe(5);
});