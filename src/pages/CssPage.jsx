import Quiz from "../components/Quiz";
import cssData from "../data/css.json";
import { QuizProvider } from "../contexts/QuizContext";

function CssPage() {
  const { title, icon, questions } = cssData;

  return (
    <QuizProvider title={title} icon={icon} questions={questions}>
      <Quiz />
    </QuizProvider>
  );
}

export default CssPage;
