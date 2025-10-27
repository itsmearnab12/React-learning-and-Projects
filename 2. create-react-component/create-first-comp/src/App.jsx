import {Button} from "./button";
import Hello from "./Hello";
let skill = () => {
  return "Data Analyst"
}
function App(){
  return <div>
    <Hello/>
    <h1>I am a Programmer and {skill()}</h1>
    <Button/>
  </div>
  
}
export default App;