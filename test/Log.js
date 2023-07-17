import Log from "../src/Log.js";

const tag = "novemberizing";

describe("Log", () => {
    it(" 0001 Log", () => {
        Log.config = {
            name: "novemberizing",
            path: ".",
            error: true,
            warning: true,
            information: true,
            debug: true,
            verbose: true
        };

        Log.e(tag, "error");
        Log.w(tag, "warning");
        Log.i(tag, "information");
        Log.d(tag, "debub");
        Log.v(tag, "verbose");
    });
});
