const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
    expect(math.add(2, 3)).toBe(5); 
}); 

test('divisão 4 / 2 igual a 2', () => { 
    expect(math.divide(4, 2)).toBe(2); 
}); 

test('multiplicação 2 * 3 igual a 6', () => { 
    expect(math.multiply(2, 3)).toBe(6); 
}); 

test('subtração 3 - 2 igual a 1', () => { 
    expect(math.subtract(4, 3)).toBe(1); 
}); 
