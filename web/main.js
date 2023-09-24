QUESTION_LIST_KEY = "questions"
CURRENT_QUESTION_INDEX_KEY = "current_question_index";

const testData = [
    "Who is he most likely person to forget where they parked their car?",
    "Who is the most likely person to sing in the shower?",
];

localStorage.setItem(CURRENT_QUESTION_INDEX_KEY, "0");
localStorage.setItem(QUESTION_LIST_KEY, JSON.stringify(testData));

const btn = document.getElementById("question-button");
btn.addEventListener("click", () => {
    const index = getQuestionIndex();
    const question = getQuestion(index);
    showQuestion(question);
    setQuestionIndex(index + 1);
});

function getQuestionIndex() {
    return +localStorage.getItem(CURRENT_QUESTION_INDEX_KEY);
}

/**
 * Sets the current question index in local storage
 * @param { number } newIndex The new index to be persisted
 */
function setQuestionIndex(newIndex) {
    localStorage.setItem(CURRENT_QUESTION_INDEX_KEY, `${newIndex}`);
}

/**
 * Fetches the question at the given index from local storage
 * @param { number } index The index of the question
 * @returns { string }
 */
function getQuestion(index) {
    const questions_json = localStorage.getItem(QUESTION_LIST_KEY);
    
    /** @type string[] */
    const questions = JSON.parse(questions_json);
    return questions[index];
}

/**
 * Presents the question on the screen
 * @param { string } question The question to be presented
 */
function showQuestion(question) {
    const elem = document.getElementById("question-text");
    elem.innerText = question;
}
