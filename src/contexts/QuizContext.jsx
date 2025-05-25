import { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  title: null,
  icon: null,
  questions: [],
  index: 0,
  answer: null,
  correctAnswers: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "newAnswer": {
      const question = state.questions.at(state.index);
      const isCorrect = action.payload === question.answer;

      return {
        ...state,
        answer: action.payload,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
      };
    }

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "restart":
      return {
        ...initialState,
        questions: state.questions,
      };

    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children, title, icon, questions = [] }) {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    title,
    icon,
    questions,
  });

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
