"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:5173'];
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({ origin: allowedOrigins }));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Backend connected to frontend" });
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { message } = req.body;
    res.json({ returningMsg: message });
}));
app.listen(8080, () => {
    console.log("server is running on port 8080");
});
