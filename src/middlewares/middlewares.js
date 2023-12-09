// middlewares.js
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const indexPath = path.resolve(path.join(__dirname, '../../public/pages/index.html'));

const router = express.Router();

// Middleware de log para verificar o corpo da requisição
router.use((req, res, next) => {
  console.log("Received request body:", req.body);
  next();
});

router.use(express.static(path.join(__dirname, "../../public")));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

export { router, indexPath };
