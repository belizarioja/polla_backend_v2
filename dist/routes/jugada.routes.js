"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugada_controller_1 = require("../controllers/jugada.controller");
const router = (0, express_1.Router)();
router.route('/')
    .post(jugada_controller_1.createJugada);
router.route('/:id')
    .get(jugada_controller_1.getJugadas)
    .delete(jugada_controller_1.deleteJugada)
    .put(jugada_controller_1.updateJugada);
exports.default = router;
//# sourceMappingURL=jugada.routes.js.map