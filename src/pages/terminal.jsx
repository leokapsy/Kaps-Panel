import React from 'react'
import { useState } from 'react';
import Header from '../components/header';

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");

  const handleCommand = (event) => {
    event.preventDefault();
    if (!currentCommand.trim()) return;

    
    const newCommand = {
      command: currentCommand,
      output: processCommand(currentCommand),
    };
    setCommands([...commands, newCommand]);
    setCurrentCommand("");
  };

  const processCommand = (command) => {
    
    switch (command.toLowerCase()) {
      case "help":
        return "Available commands: help, hello, clear";
      case "hello":
        return "Welcome to Kaps Panel terminal";
      case "clear":
        setCommands([]);
        return "";
      default:
        return `Unknown command: "${command}". Type "help" for a list of commands.`;
    }
  };

  return (
    <div className='container'>
    <Header/>
   <div className="container-tem">
        <div className="terminal">
          <div className="terminal-header">Terminal</div>
          <div className="terminal-body">
            {commands.map((item, index) => (
              <div key={index}>
                <div className="terminal-command"> {item.command}</div>
                {item.output && <div className="terminal-output">{item.output}</div>}
              </div>
            ))}
          </div>
          <form className="terminal-input" onSubmit={handleCommand}>
            <span className="terminal-prompt"> </span>
            <input
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              autoFocus
              placeholder="Type a command..."
            />
          </form>
        </div>
    </div> 
    </div>
  );
};

export default Terminal;