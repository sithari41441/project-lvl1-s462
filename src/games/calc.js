import playGame from '..';
import getRandomNumber from '../utils';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
};

const generateGameData = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const answer = operations[operator](number1, number2);

  const correctAnswer = String(answer);
  const question = `${number1} ${operator} ${number2}`;

  return { question, correctAnswer };
};

export default () => playGame(gameDescription, generateGameData);
