const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    keepAlive: true,
})

pool.connect()
    .then(() => console.log('DB connect successfull'))
    .catch(err => console.log('DB faild>>> ', err));

pool.query("SELECT * FROM student_login")
    .then(res => console.log("RES>>>>>>", res.rows))
    .catch(err => console.log(err));

// const client = new Client({
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT
// })

// client.connect()
//     .then(() => console.log('DB connect successfull'))
//     .catch(err => console.log('DB faild>>> ', err));

// client.query().then(res => console.log(res))

module.exports = pool;