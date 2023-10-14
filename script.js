const quotes = [
    {
      quote: "Soul is never born and it never dies.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "Lust, Anger, and Greed are the gates to hell.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "Abandon all attachment to the results of action and attain supreme peace.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "As the heat of a fire reduces wood to ashes, the fire of knowledge burns to ashes all karma.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "Ignorance is the cause of sinful life, and sinful life is the cause of one’s dragging on in material existence.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "The offering of wisdom is better than any material offering.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "Yoga is the journey of the self, through the self, to the self.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "The meaning of Karma is in the intention. The intention behind action is what matters.",
      author: "Krishna to Arjuna"
    },
    {
      quote: "Fear not what is not real, never was and never will be. What is real, always was and cannot be destroyed.",
      author: "Krishna to Arjuna"
    }
  ];
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayRandomQuote() {
    const randomQuote = generateRandomQuote();
    const quoteElement = document.querySelector(".quote");
    const authorElement = document.querySelector(".author");
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `— ${randomQuote.author}`;
  }
  
  const newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", displayRandomQuote);
  
  displayRandomQuote();
  