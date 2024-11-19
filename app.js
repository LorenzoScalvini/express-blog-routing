const express = require('express');
const app = express();
const port = 3000;

// 1. Index: 
app.get('/posts', (req, res) => {
    console.log("Richiesta: lista dei post");
    res.send("Richiesta: lista dei post");
});

// 2. Show:
app.get('/posts/:id', (req, res) => {
    console.log(`Richiesta: dettaglio del post ${req.params.id}`);
    res.send(`Richiesta: dettaglio del post ${req.params.id}`);
});

// 3. Create:
app.post('/posts', (req, res) => {
    console.log("Richiesta: creazione di un nuovo post");
    res.send("Richiesta: creazione di un nuovo post");
});

// 4. Update:
app.put('/posts/:id', (req, res) => {
    console.log(`Richiesta: aggiornamento del post ${req.params.id}`);
    res.send(`Richiesta: aggiornamento del post ${req.params.id}`);
});

// 5. Modify:
app.patch('/posts/:id', (req, res) => {
    console.log(`Richiesta: modifica parziale del post ${req.params.id}`);
    res.send(`Richiesta: modifica parziale del post ${req.params.id}`);
});

// 6. Delete:
app.delete('/posts/:id', (req, res) => {
    console.log(`Richiesta: cancellazione del post ${req.params.id}`);
    res.send(`Richiesta: cancellazione del post ${req.params.id}`);
});

app.get('/', (req, res) => {
    console.log("Richiesta: root");
    res.send("Ciao mondo");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
