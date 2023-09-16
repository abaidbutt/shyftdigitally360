import Dnd from "./Dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function DragnDrop() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Dnd />
      </DndProvider>
    </div>
  );
}
export default DragnDrop;
