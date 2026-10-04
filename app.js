const isAnswerCorrect = (question, userAnswer) =>{
    return question == userAnswer
}

const countCorrectAnswers = (questions, userAnswers) => {
    return  questions.reduce((accumulator, q, i) => userAnswers[i]? accumulator + 
            isAnswerCorrect(q.correctAnswer, userAnswers[i].answer):accumulator + 0, 0) 
}

const calculatePercentage = (correctCount, totalQuestions) =>
    correctCount / totalQuestions * 100 

const getResultMessage = (percentage) => 
    percentage >= 50? 'You passed':'Keep practicing'

function createQuizResult(questions, userAnswers){
    const correctCount = countCorrectAnswers(questions, userAnswers);
    const totalQuestions = questions.length;
    const percentage = calculatePercentage(correctCount, totalQuestions)
    const message = getResultMessage(percentage)

    return {correctCount: correctCount,
            totalQuestions: totalQuestions,
            percentage: percentage,
            message: message,
}
    
}

const questions = [
  { id: 1, correctAnswer: 'B' },
  { id: 2, correctAnswer: 'A' },
  { id: 3, correctAnswer: 'D' },
  { id: 4, correctAnswer: 'C' },
];

const userAnswers = [
  { questionId: 1, answer: 'B' },
  { questionId: 2, answer: 'C' },
  { questionId: 3, answer: 'D' },
  { questionId: 4, answer: 'C' },
];

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));