import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import Quiz from "../components/Quiz";
import javascriptData from "../data/javascript.json";

function JavascriptPage() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({
      type: "loadQuiz",
      payload: javascriptData,
    });
  }, [dispatch]);

  return <Quiz />;
}

export default JavascriptPage;
