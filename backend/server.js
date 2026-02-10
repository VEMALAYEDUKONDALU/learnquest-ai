const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("LearnQuest AI Backend Running 🚀");
});

// AI Quiz Endpoint
app.post("/generate-quiz", (req, res) => {
    res.json({
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    });
});

// Analytics Endpoint
app.post("/analytics", (req, res) => {
    res.json({
        score: 85,
        weakAreas: ["Geometry"],
        recommendation: "Focus more on problem-solving practice."
    });
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
