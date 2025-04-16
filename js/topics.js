const topics = {
  "001": {
    title: "Ethics & Morality",
    questions: [
      "Is it ever okay to lie?",
      "Is the death penalty ethical?",
      "Everyone should get a trophy, even if they didn't win.",
      "If no one's looking, should you have to return your shopping cart?",
      "Is it ever okay to steal?",
      "People should always be given a second chance.",
    ],
  },
  "002": {
    title: "Technology & Innovation",
    questions: [
      "AI should be allowed in schools.",
      "Life would be better without social media.",
      "Tech companies should share your data with the government for public safety.",
      "If robots become advanced enough, they should have the same rights as humans.",
      "Should parents be allowed to create designer babies (babies whose genetic traits are selected or modified)?",
      "AI should be less regulated to promote efficiency.",
    ],
  },
  "003": {
    title: "Education & Learning",
    questions: [
      "Grades should determine your intelligence.",
      "Online learning is better than traditional in-person learning for students.",
      "Schools should mandate student uniforms.",
      "Schools should teach more life skills (e.g. finance, cooking) and less academic subjects.",
      "Students should be allowed to leave school during lunch breaks.",
      "Homework is more harmful than helpful.",
    ],
  },
  "004": {
    title: "Government & Society",
    questions: [
      "Voting should be mandatory for all eligible citizens.",
      "The government should not regulate social media.",
      "The government should outlaw Mondays.",
      "Governments should prioritize freedom over safety.",
      "Citizens should pass a civics test before voting.",
      "All eligible citizens should be required to complete military service, like Switzerland, Austria, Singapore, and South Korea.",
    ],
  },
  "005": {
    title: "Health & Lifestyle",
    questions: [
      "Junk food should be heavily taxed.",
      "Smoking or vaping in public should be banned.",
      "Fast food should be banned in schools.",
      "Healthcare should not be a universal right.",
      "Animal testing should remain legal.",
      "Mental health days should be mandatory in schools.",
    ],
  },
  "006": {
    title: "Entertainment & Media",
    questions: [
      "Is cancel culture a form of bullying?",
      "Celebrities have a responsibility to be role models.",
      "Violent video games should be banned.",
      "The media does not have a responsibility to report positive news.",
      "Should streaming platforms release shows all at once?",
      "Should kids under 13 be banned from using social media?",
    ],
  },
};

// Track which questions have been shown
const usedQuestions = {
  "001": [],
  "002": [],
  "003": [],
  "004": [],
  "005": [],
  "006": [],
};

const gridSection = document.querySelector(".grid");
const diceSection = document.querySelector(".dice");
const coinSection = document.querySelector(".coin");
const questionSection = document.getElementById("question-section");
const topicTitle = document.getElementById("topic-title");
const questionText = document.getElementById("random-question");
const backBtn = document.getElementById("back-btn");

// Listen to topic button clicks
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const code = e.target.textContent.trim();
    if (topics[code]) {
      showRandomQuestion(code);
    }
  });
});

function showRandomQuestion(code) {
  const allQs = topics[code].questions;
  const used = usedQuestions[code];
  const available = allQs.filter((q) => !used.includes(q));

  topicTitle.textContent = topics[code].title;

  if (available.length === 0) {
    questionText.textContent =
      "You've answered all questions in this topic! 🎉";
  } else {
    const randIndex = Math.floor(Math.random() * available.length);
    const selectedQ = available[randIndex];
    questionText.textContent = selectedQ;
    usedQuestions[code].push(selectedQ);
  }

  gridSection.classList.add("hidden");
  diceSection.classList.add("hidden");
  questionSection.classList.remove("hidden");
  //   coinSection.classList.add("hidden");
}

backBtn.addEventListener("click", () => {
  questionSection.classList.add("hidden");
  gridSection.classList.remove("hidden");
  diceSection.classList.remove("hidden");
  //   coinSection.classList.remove("hidden");
});
