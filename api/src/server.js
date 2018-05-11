const express = require('express')
const app = express()

app.get('/api/', (req, res) => res.send('This is your API.'))

app.listen(3001, () => console.log('API started on port 3001'))