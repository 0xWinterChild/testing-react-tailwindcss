import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <header className="flex flex-col bg-[#282c34] items-center justify-center min-h-screen text-white text-lg">
        <img src={logo} className="h-[40vmin] pointer-events-none animate-slow-logo-spin" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb]"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
