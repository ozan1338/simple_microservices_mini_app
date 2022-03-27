const {Pool} = require ('pg')
const db = new Pool({
    host:'localhost',
    user:'postgres',
    password:'nikon1337',
    database:'study',
    port:5432
})

module.exports=db