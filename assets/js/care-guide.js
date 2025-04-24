const chatList = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("plant-form");
  const resultBox = document.getElementById("ai-result");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const plantType = document.getElementById("plantType").value;
    const sunlight = document.getElementById("sunlight").value;
    const soil = document.getElementById("soilType").value;
    const watering = document.getElementById("watering").value;

    const userPrompt = `I have a ${plantType} that needs ${sunlight} sunlight, prefers ${soil} soil, and is watered ${watering}. Give me care tips like how to fertilize, temperature range, and sunlight advice.`;

    const userBubble = `<div class="chat-bubble user">🌿 ${userPrompt}</div>`;
    chatList.push(userBubble);
    updateChatUI(resultBox);

    //Gemini API request
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
      contents: [
        {
          parts: [
            { text: userPrompt }
          ]
        }
      ]
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: body,
    };

    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY", requestOptions);
      const result = await response.json();

      const aiText = result.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ AI didn't return any response.";

      const aiBubble = `<div class="chat-bubble ai">🤖 ${aiText}</div>`;
      chatList.push(aiBubble);
      updateChatUI(resultBox);
    } catch (error) {
      console.error("AI Error:", error);
      const errorBubble = `<div class="chat-bubble error">❌ Error generating care tips. Please try again.</div>`;
      chatList.push(errorBubble);
      updateChatUI(resultBox);
    }
  });
});

function updateChatUI(container) {  
  container.innerHTML = chatList.join("");
}



