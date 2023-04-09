require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./config/database');

app.use([express.json(), express.urlencoded({ extended: false })])

app.get('/', (req, res) => {
    pool.query('SELECT id, sname, roll_number, password FROM public.student_login', (err, result) => {
        if (err) {
            return res.status(404).send(err);
        }
        return res.status(200).json(result.rows);
    })
})


app.all('*', (req, res) => {
    res.status(404).send('<h1>Page not found!!</h1>')
})

app.listen(process.env.PGPORT, (err) => {
    if (err) {
        console.log('ERROR>>>>>', err);
    }
    console.log(`Server is running on ${process.env.PGPORT}...`)
});