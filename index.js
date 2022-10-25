const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const course = require('./data/course.json')

app.get('/', (req, res) => {
   res.send('Course Server is running')
})

app.listen(port, () => {
   console.log(`Course running on port ,${port}`);
})

app.get('/course', (req, res) => {
   res.send(course)
})