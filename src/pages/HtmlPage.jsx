import Quiz from "../components/Quiz";
import htmlData from "../data/html.json";
import { QuizProvider } from "../contexts/QuizContext";

function HtmlPage() {
  const { title, icon, questions } = htmlData;

  return (
    <QuizProvider title={title} icon={icon} questions={questions}>
      <Quiz />
    </QuizProvider>
  );
}

export default HtmlPage;
