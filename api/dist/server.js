"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = require("./config/connection");
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
(0, connection_1.dbConnection)();
app.use((req, res, next) => {
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.append("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../../client/build")));
app.use("/api", routes_1.default);
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "../../client/build/index.html"));
    });
}
app.listen(PORT, () => {
    console.log("Server listening on port 3001");
});
exports.default = app;
//# sourceMappingURL=server.js.map