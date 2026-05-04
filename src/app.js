const express = require("express");
const cors = require("cors");
const { getChatbotResponse } = require("./chatbot");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Support Chatbot QA Lab API is running."
  });
});

app.post("/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "Message is required."
    });
  }

  const response = getChatbotResponse(message);

  return res.json(response);
});

module.exports = app;