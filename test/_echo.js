"use module";

import {echo} from "../index.js";

describe("1. When echo is called with a given input", () => {
    const input = "5-by-5";

    it(`the function should return the expected string: ${input}`, () => {
        const result = echo(input);

        return expect(result).to.equal(input);
    });
});
