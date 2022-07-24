"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(usuario_controller_1.getUsuarios)
    .post(usuario_controller_1.createUsuario);
router.route('/:postId')
    .put(usuario_controller_1.updateUsuario);
/* .get(getUsuario)
.delete(deleteUsuario) */
router.route('/rol')
    .get(usuario_controller_1.getRoles);
router.route('/login')
    .post(usuario_controller_1.getLogin);
exports.default = router;
//# sourceMappingURL=usuario.routes.js.map