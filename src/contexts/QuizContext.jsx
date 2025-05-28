import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  title: null,
  icon: null,
  bgColor: null,
  questions: [],
  index: 0,
  answer: null,
  correctAnswers: 0,
  secondsRemaining: null,
  status: "loading",
  isSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loadQuiz":
      return {
        ...initialState,
        title: action.payload.title,
        icon: action.payload.icon,
        bgColor: action.payload.bgColor,
        questions: action.payload.questions,
        secondsRemaining: action.payload.questions.length * SECS_PER_QUESTION,
        status: "active",
      };

    case "newAnswer": {
      return {
        ...state,
        answer: action.payload,
        isSubmitted: false,
      };
    }

    case "submitAnswer": {
      if (state.isSubmitted) return state;

      const question = state.questions.at(state.index);
      const isCorrect = state.answer === question.answer;

      return {
        ...state,
        isSubmitted: true,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
      };
    }

    case "nextQuestion": {
      const newIndex = state.index + 1;
      const isLastQuestion = newIndex >= state.questions.length;

      return {
        ...state,
        index: newIndex,
        answer: null,
        isSubmitted: false,
        status: isLastQuestion ? "finished" : state.status,
      };
    }

    case "restart":
      return {
        ...initialState,
        title: state.title,
        icon: state.icon,
        questions: state.questions,
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
        status: "active",
      };

    case "finishQuiz": {
      return {
        ...state,
        status: "finished",
      };
    }

    case "tick": {
      const newSecondsRemaining = state.secondsRemaining - 1;
      let newState = {
        ...state,
        secondsRemaining: newSecondsRemaining,
      };

      if (newSecondsRemaining <= 0) {
        let finalCorrectAnswers = state.correctAnswers;

        if (state.answer !== null && state.isSubmitted) {
          const currentQuestion = state.questions.at(state.index);
          const isCorrect = state.answer === currentQuestion.answer;
          if (isCorrect) {
            finalCorrectAnswers += 1;
          }
        }

        newState = {
          ...newState,
          correctAnswers: finalCorrectAnswers,
          status: "finished",
        };
      }

      return newState;
    }

    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...state,
    numQuestions: state.questions?.length ?? 0,
    dispatch,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
