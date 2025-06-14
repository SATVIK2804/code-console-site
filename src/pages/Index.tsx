
import { useState, useEffect } from 'react';
import Terminal from '../components/Terminal';
import CommandHandler from '../components/CommandHandler';

const Index = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Jason Myers' Terminal Portfolio v1.0",
    "Type 'help' to see available commands",
    ""
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const addToHistory = (command: string, output: string[]) => {
    setHistory(prev => [
      ...prev,
      `$ ${command}`,
      ...output,
      ""
    ]);
  };

  const handleCommand = (command: string) => {
    const output = CommandHandler.execute(command.toLowerCase().trim());
    addToHistory(command, output);
    setCurrentInput("");
  };

  useEffect(() => {
    // Auto-scroll to bottom when history updates
    const terminal = document.getElementById('terminal-content');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [history]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      <Terminal 
        history={history}
        currentInput={currentInput}
        setCurrentInput={setCurrentInput}
        onCommand={handleCommand}
        isTyping={isTyping}
      />
    </div>
  );
};

export default Index;
