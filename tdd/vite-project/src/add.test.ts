import { expect, test } from 'vitest';
import { add, Point } from './add';

test('function add() adds number correctly', () => {
     expect(add(1, 2)).toBe(3);
     expect(add(23, 120)).toBe(143);
})

test("Class Point is properly initialized", () => {
    const pt = new Point(10, 10);
    const pt2 = new Point(10, 10);
    expect(pt.x).toBe(10);
    expect(pt.y).toBe(10);
    expect(pt).toStrictEqual(pt2);
});

test("Class Point is properly initialized", () => {
    const pt = new Point(10, 10);
    const pt2 = new Point(-10, -30);

    expect(pt.add(5, 5)).toStrictEqual(new Point(15, 15));
    expect(pt.add(2, 4)).toStrictEqual(new Point(12, 14));

    expect(pt.substract(2, 4)).toStrictEqual(new Point (8, 6));

    expect(pt.multiply(10, 20)).toStrictEqual(new Point(100, 200));

    expect(pt.addPoint(new Point(5, 5))).toStrictEqual(new Point(15, 15));
    expect(pt.addPoint(new Point(-2, -3))).toStrictEqual(new Point(8, 7));
    expect(pt.addPoint(pt2)).toStrictEqual(new Point(0, -20))
});