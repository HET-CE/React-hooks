import "./App.css";
import DocTitleOne from "./components/Custom-Hooks/DocTitleOne";
import DocTitleTwo from "./components/Custom-Hooks/DocTitleTwo";
import UserForm from "./components/Custom-Hooks/UserForm";
import ParentComp from "./components/useContext-Hook/ParentComp";
import DataFetching from "./components/useEffect-Hook/DataFetching";
import HookCounterOne from "./components/useEffect-Hook/HookCounterOne";
import HookMouse from "./components/useEffect-Hook/HookMouse";
import MouseContainer from "./components/useEffect-Hook/MouseContainer";
import MainComp from "./components/useReducer+useContext/MainComp";
import DataFetchingInReducer from "./components/useReducer+useEffect/DataFetchingInReducer";
import CounterOne from "./components/useReducer-Hook/CounterOne";
import CounterThree from "./components/useReducer-Hook/CounterThree";
import CounterTwo from "./components/useReducer-Hook/CounterTwo";
import FocusInput from "./components/useRef/FocusInput";
import HookTimer from "./components/useRef/HookTimer";
import HookCounter from "./components/useState-Hook/HookCounter";
import HookCounter2 from "./components/useState-Hook/HookCounter2";
import HookCounterFour from "./components/useState-Hook/HookCounterFour";
import HookCounterThree from "./components/useState-Hook/HookCounterThree";

function App() {
  return (
    <div className="App">
      <p>useState</p>
      <HookCounter />
      <HookCounter2 />
      <HookCounterThree />
      <HookCounterFour />

      <hr />
      <p>useEffect</p>
      <HookCounterOne />
      <MouseContainer />
      {/* <HookMouse /> */}
      <DataFetching />

      <hr />
      <p>useContext</p>
      <ParentComp />
      <hr />
      <p>useReducer</p>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <hr />
      <p>useReducer + useContext</p>
      <MainComp />
      <hr />
      <p>useReducer + useEffect</p>
      <DataFetchingInReducer />
      <hr />
      <p>useRef Hook</p>
      <FocusInput />
      <HookTimer />
      <hr />
      <p>Custom Hook</p>
      <DocTitleOne />
      <DocTitleTwo />
      <UserForm />
    </div>
  );
}

export default App;
