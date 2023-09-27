QUESTION_LIST_KEY = "questions"
CURRENT_QUESTION_INDEX_KEY = "current_question_index";
MAX_QUESTIONS = 10;

const startBtn = document.getElementById("start-button");
const nextQuestionBtn = document.getElementById("question-button");

startBtn.addEventListener("click", () => { removeSplashscreen(); handleGetNextQuestion(); });
nextQuestionBtn.addEventListener("click", handleGetNextQuestion);

async function handleGetNextQuestion() {
    const index = getQuestionIndex();

    if (index % MAX_QUESTIONS === 0) {
        const nextQuestions = await fetchQuestions(index, MAX_QUESTIONS);
        setQuestionList(nextQuestions);
    }

    const question = getQuestion(index % MAX_QUESTIONS);
    displayQuestion(question);
    setQuestionIndex(index + 1);
}

async function removeSplashscreen() {
    // Hide the splash screen and present the question button
    const splash = document.getElementById("splashscreen");
    nextQuestionBtn.classList.remove("hidden");
    splash.classList.add("hidden");
}

/**
 * Sets the current question index in local storage
 * @param { number } newIndex The new index to be persisted
 */
function setQuestionIndex(newIndex) {
    localStorage.setItem(CURRENT_QUESTION_INDEX_KEY, `${newIndex}`);
}

/**
 * Persists the questions in local storage
 * @param { string[] } questionList The array of questions to be persisted
 */
function setQuestionList(questionList) {
    localStorage.setItem(QUESTION_LIST_KEY, JSON.stringify(questionList));
}

/**
 * Returns the current question index from local storage
 * @returns { number } The current index
 */
function getQuestionIndex() {
    const value = localStorage.getItem(CURRENT_QUESTION_INDEX_KEY);
    if (value === null) {
        return 0;
    }

    return +value;
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
 * Displays the question to the user
 * @param { string } question The question to be presented
 */
function displayQuestion(question) {
    const elem = document.getElementById("question-text");
    elem.innerText = question;
}

/**
 * Fetches a subset of the available questions
 * @param { number } offset
 * @param { number } count
 * @returns { Promise<string[]> }
 */
async function fetchQuestions(offset, count) {
    const response = await fetch(`http://0.0.0.0:8000/questions?offset=${offset}&count=${count}`);
    return await response.json();
}
