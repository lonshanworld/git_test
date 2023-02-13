const { sum, substract, capitalizefunc, reversestring } = require('./index');
const {caesarCipher, analyzeArray} = require("./index");

test('sumfunc', () => {
	expect(sum(1, 2)).toBe(3);
});

test("substractfunc", () => {
	expect(substract(3, 1)).toBe(2);
});

test("capitalizefunc",() => {
	expect(capitalizefunc("hello")).toMatch("Hello");
});

test("reversestring",() => {
	expect(reversestring("hey")).toMatch("yeh");
});

test("caesarCipher",() => {
	expect(caesarCipher("Howareyouzzzz")).toBe("Ipxbsfzpv{{{{");
});

test("numberobject",() => {
	expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average : 4,
        min : 1,
        max : 8,
		length : 6
    });
});