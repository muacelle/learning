const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()) // Middleware que converte tudo o que chega do body

app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`))

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Directed by Bong Joon-ho',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `White tshirt with your ${logo} and ID of ${id}`
    })
})