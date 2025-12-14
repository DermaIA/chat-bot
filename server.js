import express from "express";
import 'dotenv/config';
import OpenAI from "openai";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());

console.log("API KEY:", process.env.OPENAI_API_KEY);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ======= ROTA DO CHATBOT =======
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (err) {
    console.error("Erro no chat:", err);
    res.status(500).json({ reply: "Erro no servidor." });
  }
});

// ======= INICIAR SERVIDOR =======
<<<<<<< HEAD
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
=======
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
>>>>>>> d8b535f (primeiro deploy backend chatbot)
});
