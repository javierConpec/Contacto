"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/contactoRoutes.ts
const express_1 = require("express");
const contactoController_1 = require("../controllers/contactoController");
const router = (0, express_1.Router)();
router.post("/contacto", contactoController_1.postContacto);
exports.default = router;
