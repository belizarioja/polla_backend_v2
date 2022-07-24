"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jornada_controller_1 = require("../controllers/jornada.controller");
const router = (0, express_1.Router)();
router.route('/')
    .post(jornada_controller_1.createJornada);
router.route('/:id')
    .get(jornada_controller_1.getJornadas)
    .put(jornada_controller_1.updateJornada);
router.route('/activas/:id')
    .get(jornada_controller_1.getJornadasActivas);
exports.default = router;
//# sourceMappingURL=jornada.routes.js.map