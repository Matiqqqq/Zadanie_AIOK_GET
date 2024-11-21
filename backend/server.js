import fs from 'fs';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 7777;


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server with students');
});

app.get('/students', (req, res) => {
    fs.readFile('./students.json', 'utf8', (err, data) => {
        if (err) {
            console.error("File read failed in GET /students:", err);
            return res.status(500).send('File read failed');
        }
        console.log("GET: /students");
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
