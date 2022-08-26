import { Request, Response } from 'express'
// import moment from 'moment'

// DB
import { connect } from '../database'
// Interfaces
import { Sede } from '../interface/Sede'

export async function getSedes (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const sql = "SELECT * FROM t_sedes ";
        const resp = await conn.query(sql);
        return res.json(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando sedes: ' + e);
    }
    finally {
        conn.end();
    }
}

export async function createSede (req: Request, res: Response) {
    const conn = await connect();
    try {
        const newSede: Sede = req.body;
        await conn.query('INSERT INTO t_sedes SET ?', [newSede]);
        return res.status(200).send('Sede creado con éxito');
    } catch (e) {
        return res.status(500).send('Error Creando sede: ' + e);
    }
    finally {
        conn.end();
    }
}

export async function updateSede (req: Request, res: Response) {
    const conn = await connect();
    try {
        const id = req.params.postId;
        const updateSede: Sede = req.body;
        await conn.query('UPDATE t_sedes set ? WHERE id = ?', [updateSede, id]);
    } catch (e) {
        return res.status(500).send('Error Actualizando sede: ' + e);
    }
    finally {
        conn.end();
    }
}