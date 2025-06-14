
import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  history: string[];
  currentInput: string;
  setCurrentInput: (input: string) => void;
  onCommand: (command: string) => void;
  isTyping: boolean;
}

const Terminal = ({ history, currentInput, setCurrentInput, onCommand, isTyping }: TerminalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Focus input on mount and when clicked
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      onCommand(currentInput);
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="min-h-screen bg-black text-green-400 p-4 cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-green-400 pb-2">
        <TerminalIcon size={20} />
        <span className="text-green-300">jason@portfolio:~</span>
      </div>

      {/* Terminal Content */}
      <div id="terminal-content" className="max-h-[calc(100vh-100px)] overflow-y-auto">
        {/* History */}
        <div className="space-y-1">
          {history.map((line, index) => (
            <div 
              key={index} 
              className={`${line.startsWith('$') ? 'text-green-300' : 'text-green-400'} whitespace-pre-wrap`}
            >
              {line}
            </div>
          ))}
        </div>

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-green-300 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="bg-transparent text-green-400 outline-none flex-1 font-mono"
            disabled={isTyping}
            autoComplete="off"
            spellCheck="false"
          />
          <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            █
          </span>
        </form>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 text-green-600 text-sm">
        Press Ctrl+C to clear • Type 'help' for commands
      </div>
    </div>
  );
};

export default Terminal;
