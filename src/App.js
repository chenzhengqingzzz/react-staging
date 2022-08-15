import logo from './logo.svg';
import './App.css';

// 用函数式定义了一个组件取名App
// 唯一放入容器的组件，我们写的组件都是它的子组件
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React！！！
        </a>
      </header>
    </div>
  );
}

//ES6默认暴露
export default App;
