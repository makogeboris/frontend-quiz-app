import Quiz from "../components/Quiz";
import jsData from "../data/javascript.json";
import { QuizProvider } from "../contexts/QuizContext";

function JavascriptPage() {
  const { title, icon, questions } = jsData;

  return (
    <QuizProvider title={title} icon={icon} questions={questions}>
      <Quiz />
    </QuizProvider>
  );
}

export default JavascriptPage;
