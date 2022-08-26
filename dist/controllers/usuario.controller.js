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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsuario = exports.createUsuario = exports.getLogin = exports.getRoles = exports.getUsuarios = void 0;
// import moment from 'moment'
// DB
const database_1 = require("../database");
function getUsuarios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa, c.co_sede, c.tx_sede ";
            const from = " FROM t_usuarios a, t_roles b , t_sedes c ";
            const where = " WHERE a.co_sede=c.co_sede AND a.co_rol = b.co_rol ";
            const resp = yield conn.query(sql + from + where);
            return res.json(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando usuarios: ' + e);
        }
    });
}
exports.getUsuarios = getUsuarios;
function getRoles(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT * FROM t_roles ";
            const resp = yield conn.query(sql);
            return res.json(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error Listando roles: ' + e);
        }
    });
}
exports.getRoles = getRoles;
function getLogin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const { usuario, clave } = req.body;
            // const fe_ult_acceso = moment().format('YYYY-MM-DD HH:mm:ss')
            const sql = "select a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa, c.co_sede, c.tx_sede ";
            const from = " from t_usuarios a, t_roles b , t_sedes c ";
            const where = " where a.co_sede=c.co_sede and a.co_rol = b.co_rol and a.tx_usuario = '" + usuario + "' and a.tx_clave = '" + clave + "'";
            const resp = yield conn.query(sql + from + where);
            return res.json(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error Logueando ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getLogin = getLogin;
function createUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const newUser = req.body;
            yield conn.query('INSERT INTO t_usuarios SET ?', [newUser]);
            return res.status(200).send('Usuario creado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error Creando usuario: ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.createUsuario = createUsuario;
function updateUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            yield conn.query('UPDATE t_usuarios SET ?');
            return res.status(200).send('Usuario ACTUALIZADO con éxito');
        }
        catch (e) {
            return res.status(500).send('Error ACTUALIZANDO usuario: ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.updateUsuario = updateUsuario;
//# sourceMappingURL=usuario.controller.js.map