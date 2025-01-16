import { useState } from "react";

function FunctionComponentUser() {
  const [data, setData] = useState(0);

  function demo(){
    setData(data+1);
  }
  console.warn("____________________________")
  return (
    <div>
      <h1>Functional User Component</h1>
      <h1>{data}</h1>
      <button onClick={demo}> Click Me !</button>
    </div>
  );
  }
  
  export default FunctionComponentUser;