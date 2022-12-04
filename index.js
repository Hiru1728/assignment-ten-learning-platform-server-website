const { request } = require('express');
const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
// const course = require('./data/courses.json');
const name = require('./data/name.json');


app.get('/', (req, res) => {
    res.send('Courses API running')
})

app.get('/courses-name', (req, res) => {
    res.send(name);
})

app.get('/courses-name/:id', (req, res) => {
    const id = req.params.id;
    if (id === '7') {
        res.send(courses);
    }
    else {
        const selectedCourses = courses.filter(n => n.id === id);
        res.send(selectedCourses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id);
    res.send(selectedCourse);
    // console.log(req.params.id);
})

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n.id === id);
    res.send(selectedCourse);
    // console.log(req.params.id);
})

app.listen(port, () => console.log('Learning courses server running on port', port))