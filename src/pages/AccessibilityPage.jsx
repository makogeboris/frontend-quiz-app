import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import Quiz from "../components/Quiz";
import accessibilityData from "../data/accessibility.json";

function AccessibilityPage() {
  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({
      type: "loadQuiz",
      payload: accessibilityData,
    });
  }, [dispatch]);

  return <Quiz />;
}

export default AccessibilityPage;
