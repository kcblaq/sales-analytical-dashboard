import "./App.css";
import Show from "../src/components/Show";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <div className="App">
        <Show />
       
      </div>
    </>
  );
}

export default App;
