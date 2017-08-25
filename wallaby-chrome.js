
// Configuration file for Wallaby.js using a headless Chrome browser.

// Currently I am using Chrome Canary 62.0.3194.0 which supports ES6 modules.

module.exports = () => {
    return {
        env: {
            kind: "chrome"
        },
        files: [
          {pattern: 'node_modules/chai/chai.js', instrument: false},
          {pattern: "index.js", load: false}
        ],
        tests: [
            "test/*.js"
        ],
        testFramework: "mocha",
        debug: false,
        setup: () => {
            window.expect = chai.expect;
        }
    };
};
