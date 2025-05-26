import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import Quiz from "../components/Quiz";
import htmlData from "../data/html.json";

function HtmlPage() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({
      type: "loadQuiz",
      payload: htmlData,
    });
  }, [dispatch]);

  return <Quiz />;
}

export default HtmlPage;
