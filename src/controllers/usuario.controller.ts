import { Request, Response } from 'express'
// import moment from 'moment'

// DB
import { connect } from '../database'
// Interfaces
import { User } from '../interface/Usuario'

export async function getUsuarios (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const sql = "SELECT a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa, c.co_sede, c.tx_sede ";
        const from = " FROM t_usuarios a, t_roles b , t_sedes c ";
        const where = " WHERE a.co_sede=c.co_sede AND a.co_rol = b.co_rol ";
        const resp = await conn.query(sql + from + where);
        return res.json(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error listando usuarios: ' + e);
    }
    finally {
        conn.end();
    }
}

export async function getRoles (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const sql = "SELECT * FROM t_roles ";
        const resp = await conn.query(sql);
        return res.json(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error Listando roles: ' + e);
    }
    finally {
        conn.end();
    }
}
export async function getLogin (req: Request, res: Response): Promise<Response | void> {
    const conn = await connect();
    try {
        const { usuario, clave } = req.body;
        // const fe_ult_acceso = moment().format('YYYY-MM-DD HH:mm:ss')
        const sql = "select a.co_usuario, a.tx_nombre, a.tx_usuario, a.tx_clave, a.co_rol, b.tx_rol, a.in_activa, c.co_sede, c.tx_sede ";
        const from = " from t_usuarios a, t_roles b , t_sedes c ";
        const where = " where a.co_sede=c.co_sede and a.co_rol = b.co_rol and a.tx_usuario = '" + usuario + "' and a.tx_clave = '" + clave + "'";
        const resp = await conn.query(sql + from + where);
        return res.json(resp[0]);
    }
    catch (e) {
        return res.status(500).send('Error Logueando ' + e);
    }
    finally {
        conn.end();
    }
}

export async function createUsuario (req: Request, res: Response) {
    const conn = await connect();
    try {
        const newUser: User = req.body;
        await conn.query('INSERT INTO t_usuarios SET ?', [newUser]);
        return res.status(200).send('Usuario creado con éxito');
    } catch (e) {
        return res.status(500).send('Error Creando usuario: ' + e);
    }
    finally {
        conn.end();
    }

}

export async function updateUsuario (req: Request, res: Response) {
    const conn = await connect();
    try {
        await conn.query('UPDATE t_usuarios SET ?');
        return res.status(200).send('Usuario ACTUALIZADO con éxito');
    } catch (e) {
        return res.status(500).send('Error ACTUALIZANDO usuario: ' + e);
    }
    finally {
        conn.end();
    }
}