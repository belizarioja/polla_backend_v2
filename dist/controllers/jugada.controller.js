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
exports.deleteJugada = exports.updateJugada = exports.createJugada = exports.getJugadas = void 0;
// DB
const database_1 = require("../database");
function getJugadas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            const sql = "SELECT * FROM t_jugadas ";
            const where = " WHERE co_jornada = ? ORDER BY 1 ASC ";
            const resp = yield conn.query(sql + where, [id]);
            return res.status(200).send(resp[0]);
        }
        catch (e) {
            return res.status(500).send('Error listando jugadas : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.getJugadas = getJugadas;
function createJugada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const { jornada, jugador, carrera1, carrera2, carrera3, carrera4, carrera5, carrera6, usuario } = req.body;
            const conn = yield (0, database_1.connect)();
            const sql = "insert into t_jugadas (co_jornada, co_usuario, tx_jugador, nu_carrera1, nu_carrera2, nu_carrera3, nu_carrera4, nu_carrera5, nu_carrera6) ";
            const values = " values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            yield conn.query(sql + values, [jornada, usuario, jugador, carrera1, carrera2, carrera3, carrera4, carrera5, carrera6]);
            return res.status(200).send('Resultado creado con éxito');
        }
        catch (e) {
            return res.status(500).send('Error creando resultado : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.createJugada = createJugada;
function updateJugada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            const { carrera, resultado } = req.body;
            const update = "update t_jugadas ";
            let set = "";
            if (carrera === 1) {
                set = " set nu_carrera1 = ? ";
            }
            if (carrera === 2) {
                set = " set nu_carrera2 = ? ";
            }
            if (carrera === 3) {
                set = " set nu_carrera3 = ? ";
            }
            if (carrera === 4) {
                set = " set nu_carrera4 = ? ";
            }
            if (carrera === 5) {
                set = " set nu_carrera5 = ? ";
            }
            if (carrera === 6) {
                set = " set nu_carrera6 = ? ";
            }
            const where = " where co_jugada = ? ";
            yield conn.query(update + set + where, [resultado, id]);
            return res.status(200).send('Jugada editada con éxito');
        }
        catch (e) {
            return res.status(500).send('Error editando jugada : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.updateJugada = updateJugada;
function deleteJugada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        try {
            const id = req.params.id;
            const conn = yield (0, database_1.connect)();
            yield conn.query('DELETE FROM t_jugadas WHERE co_jugada = ?', [id]);
            return res.status(200).send('Jugada eliminada con éxito');
        }
        catch (e) {
            return res.status(500).send('Error eliminando jugada : ' + e);
        }
        finally {
            conn.end();
        }
    });
}
exports.deleteJugada = deleteJugada;
//# sourceMappingURL=jugada.controller.js.map