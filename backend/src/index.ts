import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
    res.json({message: 'succes'});
});

app.listen(5000, () => {
    console.log("Server running at localhost:5000");
});