import logo from "./logo.svg";
import "./App.css";
import To_do from "./components/To-do";
import CreatTime from "./components/CreatTime";
import AlertButton from "./components/AlertButton";
function App() {
  return (
    <div>
      <To_do />
      <CreatTime />
      <AlertButton />
    </div>
  );
}

export default App;
