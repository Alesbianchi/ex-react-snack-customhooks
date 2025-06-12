// src/App.jsx
import useDate from "./useDate.jsx";

function App() {
  const currentDate = useDate();

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;
