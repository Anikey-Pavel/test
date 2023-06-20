const sum = (a, b) => {
	if (!a || !b) throw new Error("one of parameters is undefined");
	return +a + +b;
};

describe("sum", () => {
	test("should return sum", () => {
		const result = sum(4, 5);

		expect(result).toBe(9);
	});

	test("should return sum when one of parameters is string", () => {
		const result = sum(4, "5");

		expect(result).toBe(9);
	});

	test("should return error when one of parameters is undefined", () => {
		expect(() => sum(4, undefined)).toThrow();
	});
});
