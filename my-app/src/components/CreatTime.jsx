import react from "react";

function CreatTime() {
  let date_ob = new Date();
  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  return (
    <div className="creat-name">
      <h2>clock</h2>
      {hours}:{minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}

export default CreatTime;
