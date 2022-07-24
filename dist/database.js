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
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
const host = 'www.hatogrillteconsiente.com';
const user = 'hatogril_pollahipica';
const password = '*pollahipica*';
const database = 'hatogril_polla';
/* const host = 'localhost'
const user = 'usuario'
const password = '*Casazea1234'
const database = 'polla' */
// const message = 'BD App ' + database + ' está conectada'
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, promise_1.createPool)({
            host,
            user,
            database,
            password
        });
        return connection;
    });
}
exports.connect = connect;
//# sourceMappingURL=database.js.map