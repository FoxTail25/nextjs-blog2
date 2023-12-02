import pg from 'pg';

const bd = new pg.Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "node_postgres"
})

class UserController {

    async createtUsers(user) {
        const { name, surname } = user;
        let answer;
        await db.query('insert into person (name, surname) values($1, $2) RETURNING *', [name, surname]).then(res => answer = res.rows[0]);
        return answer
    }

    async getUsers() {
        let answer;
        await bd.query('select * from person').then(res => answer = res.rows)
        return answer
    }

    async delUser(id) {
        let answer;
        await bd.query('delete from person where id = $1 RETURNING *', [id]).then(res => {
            return answer = res.rows[0]
        });
        return answer
    }

}

const userController = new UserController()

export default userController