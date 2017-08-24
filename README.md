# wallaby
## Feature request for Wallaby.js

Clone the repository, then npm install, to install various dependencies (Babel, Chai, Mocha etc).

Run tests in Wallaby.js with Node.js using the wallaby-node.js configuration file.

Run Mocha tests without Wallaby.js in a browser that supports ES6 modules, such as Chrome Canary 62 or later, by loading index.html.

Run tests in Wallaby.js with headless Chrome using the wallaby-chrome.js configuration file. You should see SyntaxError. Use of reserved word 'import'.

Once Wallaby.js has a means of loading files into headless Chrome using <script type="module" src="test/_echo.js"></script> rather than the simple <script src="test/_echo.js"></script> the tests should succeed.
