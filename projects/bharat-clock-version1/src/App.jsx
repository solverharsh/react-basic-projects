import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/Currenttime";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default App;
