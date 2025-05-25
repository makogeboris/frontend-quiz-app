import Quiz from "../components/Quiz";
import a11yData from "../data/accessibility.json";
import { QuizProvider } from "../contexts/QuizContext";

function AccessibilityPage() {
  const { title, icon, questions } = a11yData;

  return (
    <QuizProvider title={title} icon={icon} questions={questions}>
      <Quiz />
    </QuizProvider>
  );
}

export default AccessibilityPage;
