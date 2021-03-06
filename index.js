import express from 'express'; //backend
import bodyParser from 'body-parser'; //parses incoming body data

import usersRoutes from './routes/users.js'; // .js is important!

const app = express(); // our app lives here
const PORT = 5000; // all caps as it will never change

app.use(bodyParser.json()); //formats app so we use JSON data in whole app

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello from Homepage.')
});

app.use('/users', usersRoutes);




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))






