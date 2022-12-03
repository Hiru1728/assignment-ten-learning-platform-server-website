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

app.get('/courses-name', (req, res) => {
    res.send(courses);
})

app.get('/courses-name/:id', (req, res) => {
    const id = req.params.id;
    if (id === '7') {
        res.send(courses);
    }
    else {
        const selectedCourses = courses.find(n => n.id === id);
        res.send(selectedCourses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = news.find(n => n._id === id);
    res.send(selectedCourse);
    console.log(req.params.id);
})

app.listen(port, () => console.log('Learning news server running on port', port))