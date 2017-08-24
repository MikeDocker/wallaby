
// Configuration file for Wallaby.js using a headless Chrome browser.

// Currently I am using Chrome Canary 62.0.3194.0 which supports ES6 modules.

// However, this approach currently fails because we have no way of asking Wallaby.js to load the tests using <script type="module">.

module.exports = () => {
    return {
        env: {
            kind: "chrome"
        },
        files: [
            "index.js"
        ],
        tests: [
            "test/*.js"
        ],
        testFramework: "mocha",
        debug: false
    };
};
