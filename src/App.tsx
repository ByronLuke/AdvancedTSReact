import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  return(  
  <main>
    <Input id="name" label="Your name" type="text"></Input>
    <Input id="age" label="Your Age" type="number"></Input>
    <Button>A Button</Button>
    <Button href="https://google.com">A Link</Button>
  </main>
  )}

export default App;
