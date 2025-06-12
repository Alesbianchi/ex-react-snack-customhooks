
import useCustomPointer from "./useCustomPointer.jsx";

function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;

