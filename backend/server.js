const express = require('express');
const cors = require('cors');
const { marked } = require('marked');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/convert', (req, res) => {
    const { markdown } = req.body;
    const html = marked(markdown);
    res.json({ html });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server Running on PORT:${PORT}`);
});
