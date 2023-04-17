import { sum } from './Home';

test('Ma function sum', () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
})