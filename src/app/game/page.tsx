"use client"
import { useEffect, useState } from 'react';

const colors = ['red', 'blue', 'green', 'yellow'];

export default function Game() {
  const [activeColor, setActiveColor] = useState('');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(3);
  const [timeLeft, setTimeLeft] = useState(3);

  useEffect(() => {
    if (gameOver) return;
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setActiveColor(newColor);
    setTimeLeft(timer);

    const timeout = setTimeout(() => {
      setGameOver(true);
    }, timer * 1000);

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(countdown);
          return 0;
        }
        return parseFloat((prev - 0.1).toFixed(1));
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      clearInterval(countdown);
    };
  }, [score]);

  const handleClick = (color:any) => {
    if (color === activeColor) {
      setScore(score + 1);
      setTimer(Math.max(0.5, timer - 0.1));
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setTimer(3);
    setTimeLeft(3);
    setGameOver(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Color Dash</h1>
      <p className="mb-2">Score: {score}</p>
      <p className="mb-2">Time Left: {timeLeft.toFixed(1)}s</p>
      {!gameOver ? (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleClick(color)}
              className={`w-32 h-32 rounded-lg focus:outline-none border-4 ${
                activeColor === color ? `border-white` : `border-transparent`
              }`}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      ) : (
        <>
          <p className="mt-4 text-xl">Game Over!</p>
          <button
            onClick={handleRestart}
            className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}