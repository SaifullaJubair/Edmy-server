const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const course = require('./data/course.json');

app.use(cors());


app.get('/', (req, res) => {
   res.send('Course Server is running')
})

app.get('/categories', (req, res) => {
   res.send(categories)
})


app.listen(port, () => {
   console.log(`Course running on port ,${port}`);
})

app.get('/course', (req, res) => {
   res.send(course)
})