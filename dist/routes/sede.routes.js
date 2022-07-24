"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sede_controller_1 = require("../controllers/sede.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(sede_controller_1.getSedes)
    .post(sede_controller_1.createSede);
router.route('/:postId')
    .put(sede_controller_1.updateSede);
exports.default = router;
//# sourceMappingURL=sede.routes.js.map