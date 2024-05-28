const numeroprimo = require('../funcoes/numeroprimo')

test('', () => {
    expect(numeroprimo(7)).toEqual(true);
});
test('', () => {
    expect(numeroprimo(4)).toEqual(false);
});