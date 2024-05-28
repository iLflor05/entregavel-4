const mdc = require('../funcoes/mdc')

test('', () => {
    expect(mdc(12,46)).toEqual(2);
});
test('', () => {
    expect(mdc(18,60)).toEqual(6);
});