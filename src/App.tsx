import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <header className="p-4 text-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Welcome to React with Tailwind CSS</h1>
      </header>
      <main className="p-6 bg-white rounded-lg shadow-lg mt-6">
        <p className="text-xl text-gray-700">This is a simple React app using Tailwind CSS for styling.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Click Me
        </button>
      </main>
    </div>
  );
};

export default App;