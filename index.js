const { request } = require('express');
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
// const course = require('./data/courses.json');



app.get('/', (req, res) => {
    res.send('News API running')
})

app.get('/details-name', (req, res) => {
    res.send(courses);
})



app.listen(port, () => console.log('Learning news server running on port', port))