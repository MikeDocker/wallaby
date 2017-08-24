
// Configuration file for Wallaby.js using Node.js.

// Currently I am using node 8.4.0 which does not support ES6 modules.

// However, with the Babel compiler they can be used.

module.exports = (wallaby) => {
    return {
        env: {
            type: "node"
        },
        files: [
            "index.js"
        ],
        tests: [
            "test/*.js"
        ],
        testFramework: "mocha",
        compilers: {
            "**/*.js": wallaby.compilers.babel({
                presets: ["env"]
            })
        },
        debug: false,
        setup: () => {
            global.expect = require("chai").expect;
        }
    };
};
