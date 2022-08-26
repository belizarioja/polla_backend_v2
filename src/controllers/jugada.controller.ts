import { Request, Response } from 'express'
// DB
import { connect } from '../database'

export async function getJugadas (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const id = req.params.id;
        const sql = "SELECT * FROM t_jugadas ";
        const where = " WHERE co_jornada = ? ORDER BY 1 ASC ";
        const resp = await conn.query(sql + where, [id]);
        return res.status(200).send(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando jugadas : ' + e);
    }
    finally {
        conn.end();
    }
}

export async function createJugada (req: Request, res: Response) {
    const conn = await connect();
    try {
        const { jornada, jugador, carrera1, carrera2, carrera3, carrera4, carrera5, carrera6, usuario } = req.body;
        const sql = "insert into t_jugadas (co_jornada, co_usuario, tx_jugador, nu_carrera1, nu_carrera2, nu_carrera3, nu_carrera4, nu_carrera5, nu_carrera6) "
        const values = " values (?, ?, ?, ?, ?, ?, ?, ?, ?)"
        await conn.query(sql + values, [jornada, usuario, jugador, carrera1, carrera2, carrera3, carrera4, carrera5, carrera6]);
        return res.status(200).send('Resultado creado con éxito');
    }
    catch (e) {
        return res.status(500).send('Error creando resultado : ' + e);
    }
    finally {
        conn.end();
    }
}
export async function updateJugada (req: Request, res: Response) {
    const conn = await connect();
    try {
        const id = req.params.id;
        const { carrera, resultado } = req.body;
        const update = "update t_jugadas "
        let set = ""
        if (carrera === 1) {
            set = " set nu_carrera1 = ? "
        }
        if (carrera === 2) {
            set = " set nu_carrera2 = ? "
        }
        if (carrera === 3) {
            set = " set nu_carrera3 = ? "
        }
        if (carrera === 4) {
            set = " set nu_carrera4 = ? "
        }
        if (carrera === 5) {
            set = " set nu_carrera5 = ? "
        }
        if (carrera === 6) {
            set = " set nu_carrera6 = ? "
        }
        const where = " where co_jugada = ? "
        await conn.query(update + set + where, [resultado, id]);
        return res.status(200).send('Jugada editada con éxito');
    }
    catch (e) {
        return res.status(500).send('Error editando jugada : ' + e);
    }
    finally {
        conn.end();
    }
}

export async function deleteJugada (req: Request, res: Response) {
    const conn = await connect();
    try {
        const id = req.params.id;
        await conn.query('DELETE FROM t_jugadas WHERE co_jugada = ?', [id]);
        return res.status(200).send('Jugada eliminada con éxito');
    }
    catch (e) {
        return res.status(500).send('Error eliminando jugada : ' + e);
    }
    finally {
        conn.end();
    }
}