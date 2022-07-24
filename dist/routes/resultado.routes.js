"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultado_controller_1 = require("../controllers/resultado.controller");
const router = (0, express_1.Router)();
router.route('/')
    .post(resultado_controller_1.createResultado);
router.route('/:id')
    .get(resultado_controller_1.getResultados)
    .put(resultado_controller_1.updateResultado)
    .delete(resultado_controller_1.deleteResultado);
exports.default = router;
//# sourceMappingURL=resultado.routes.js.map