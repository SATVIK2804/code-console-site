
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

  const handleLinkClick = (text: string) => {
    // Check if the text contains a URL
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = text.match(urlRegex);
    if (match) {
      window.open(match[0], '_blank');
    }
  };

  const getLineColor = (line: string) => {
    // Command lines (starting with $)
    if (line.startsWith('$')) {
      return 'text-green-400';
    }
    
    // Headers and titles
    if (line.includes('📁') || line.includes('💻') || line.includes('💼') || line.includes('🎓') || line.includes('📬')) {
      return 'text-yellow-400';
    }
    
    // Project names and section headers
    if (line.includes('🚀') || line.includes('📱') || line.includes('🤖') || line.includes('🌐')) {
      return 'text-cyan-400';
    }
    
    // Tech stack lines
    if (line.includes('Tech:') || line.includes('Languages:') || line.includes('Frontend:') || line.includes('Backend:') || line.includes('DevOps')) {
      return 'text-blue-400';
    }
    
    // Progress bars and percentages
    if (line.includes('████') || line.includes('%')) {
      return 'text-green-300';
    }
    
    // Email, links, and contact info
    if (line.includes('@') || line.includes('linkedin.com') || line.includes('github.com')) {
      return 'text-blue-300';
    }
    
    // Error messages
    if (line.includes('Command not found') || line.includes('Error')) {
      return 'text-red-400';
    }
    
    // Success messages
    if (line.includes('download') || line.includes('Opening')) {
      return 'text-green-400';
    }
    
    // Default white for most text
    return 'text-white';
  };

  const renderLine = (line: string, index: number) => {
    const baseColor = getLineColor(line);
    
    // Check if line contains a URL
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    if (urlRegex.test(line)) {
      const parts = line.split(urlRegex);
      return (
        <div key={index} className={`${baseColor} whitespace-pre-wrap`}>
          {parts.map((part, partIndex) => {
            if (urlRegex.test(part)) {
              return (
                <span
                  key={partIndex}
                  className="text-blue-400 underline cursor-pointer hover:text-blue-300 transition-colors"
                  onClick={() => handleLinkClick(part)}
                >
                  {part}
                </span>
              );
            }
            return part;
          })}
        </div>
      );
    }

    return (
      <div 
        key={index} 
        className={`${baseColor} whitespace-pre-wrap`}
      >
        {line}
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-black text-white p-4 cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-gray-600 pb-2">
        <TerminalIcon size={20} className="text-green-400" />
        <span className="text-green-400">jason@portfolio:~</span>
      </div>

      {/* Terminal Content */}
      <div id="terminal-content" className="max-h-[calc(100vh-100px)] overflow-y-auto">
        {/* History */}
        <div className="space-y-1">
          {history.map((line, index) => renderLine(line, index))}
        </div>

        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="bg-transparent text-white outline-none flex-1 font-mono"
            disabled={isTyping}
            autoComplete="off"
            spellCheck="false"
          />
          <span className={`ml-1 text-white ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            █
          </span>
        </form>
      </div>

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 text-gray-500 text-sm">
        Press Ctrl+C to clear • Type 'help' for commands
      </div>
    </div>
  );
};

export default Terminal;
