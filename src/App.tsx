import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Card from "./components/Card";
import IconButton from "./components/IconButton";
import HeartIcon from "./HeartIcon";
import List from "./components/List";
import { users, hobbies } from "./components/Users";

function App() {

  return (
    <main>
      <Input id="name" label="Your name" type="text"></Input>
      <Input id="age" label="Your Age" type="number"></Input>
      <Button>A Button</Button>
      <Button href="https://google.com">A Link</Button>

      <Container as={Button}>Click me</Container>

      <Card
        title="My Card"
        actions={
          <button onClick={() => console.log("Button Clicked!")}>
            Click me and check console!
          </button>
        }
      >
        Extra Content
      </Card>

      <IconButton
        icon={HeartIcon}
        onClick={() => console.log("❤️ Clicked! ❤️")}
      >
        {" "}
        Send love!
      </IconButton>

      <section>
        <h2>Users</h2>
         <List
          items={users}
          renderItem={(user) => <li key={user.id}>{user.name}</li>}
        />
      </section>
      <section>
        <h2>Hobbies</h2>
        <List 
        items={hobbies}
        renderItem={(hobby)=> <li key={hobby}>{hobby}</li>}/>
      </section>
    </main>
  );
}

export default App;
