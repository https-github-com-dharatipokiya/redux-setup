import thunk from "redux-thunk";

const middleware = [thunk];

const { createLogger } = require("redux-logger");
middleware.push(createLogger({ collapsed: true }));

export default middleware;
