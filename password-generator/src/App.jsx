import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-10 bg-gray-800 text-white shadow-md rounded-lg">
      <h1 className="text-center text-2xl font-bold mb-4">
        Password Generator
      </h1>
      <div className="flex items-center shadow rounded-lg overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          className="w-full py-2 px-4 text-gray-900 bg-gray-200 outline-none"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-600"
        >
          Copy
        </button>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-y-4 gap-x-4">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className="text-white">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="characterInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-white">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
