import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/:username', async (req, res) => {
    try {
      const username = req.params.username;
      const response = await axios.get(`https://api.github.com/users/${username}`);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
