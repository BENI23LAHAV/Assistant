import logo from "./logo.svg";
import "./App.css";
import To_do from "./components/To-do";
import CreatTime from "./components/CreatTime";
import AlertButton from "./components/AlertButton";
function App() {
  let name = prompt("Enter your name");
  return (
    <div className="container ">
      <h1>Hello {name}</h1>
      <To_do />
      <CreatTime />
      <AlertButton />
    </div>
  );
}

export default App;
