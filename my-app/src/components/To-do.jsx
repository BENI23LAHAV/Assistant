import react from "react";
function To_do() {
  const toDoList = ["Milk", "Bread", "Cheese", "Floor", "Oil", "Eggs"];
  let arr = toDoList.map((item) => {
    return (
      <li>
        {item}
        <input type="checkbox" />
      </li>
    );
  });
  return (
    <div className="to-do">
      <ul>{arr}</ul>
    </div>
  );
}
export default To_do;
