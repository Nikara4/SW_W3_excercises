import "./styles.css";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Button, Input, Textarea } from "./components/Form";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Employees from "./components/Employees";

function App() {
  return (
    <div>
      <NavBar />
      <Input
        bgColor="c64Purple"
        color="swanWhite"
        borderColor="luckyPoint"
        borderSize="2px"
        borderRadius="10px"
      />
      <Textarea
        bgColor="c64Purple"
        color="swanWhite"
        borderColor="luckyPoint"
        borderSize="5"
        borderRadius="10px"
      />
      <Button icon={faCoffee} bgColor="chileanFire" color="swanWhite">
        button with icon
      </Button>
      <Card />
      <Employees />
    </div>
  );
}

export default App;
