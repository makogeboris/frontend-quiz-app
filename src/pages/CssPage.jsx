import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import Quiz from "../components/Quiz";
import cssData from "../data/css.json";

function CssPage() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({
      type: "loadQuiz",
      payload: cssData,
    });
  }, [dispatch]);

  return <Quiz />;
}

export default CssPage;
