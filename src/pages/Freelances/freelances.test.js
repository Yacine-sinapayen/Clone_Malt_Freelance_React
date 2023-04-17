import { sum } from './Freelances';

test('Ma function sum', () => {
    const result = sum(3, 7);
    expect(result).toBe(10);
})