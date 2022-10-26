import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';
import Quiz from '../../images/quiz.svg'
import './Style.css'

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (

    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar o quiz:</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
      <img src={Quiz} alt="Início do quiz" />
    </div>

  )
}

export default Welcome