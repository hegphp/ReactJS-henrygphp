import logo from "./logo.svg";
import "./App.css";
import * as util from "./components/utils.js";

const reactDesc = ["Core", "Fundamental", "Crucial"];

function getRandInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header className="App-header App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Xin chào! Đây là chương trình ReactJs đầu tiên của tôi!</p>
      <p>Utils variables: ${util.default}</p>
      {/* Dòng dưới đây gọi giá trị của hàm getRandInt() */}
      <p>Dynamics Random variable: {reactDesc[getRandInt(2)]}</p>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
