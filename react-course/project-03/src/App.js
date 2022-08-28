import CountButton from "./countButton";


function App() {
  return (
    <div>
      <CountButton increment={5}/>
      <CountButton increment={2}/>
    </div>
  );
}

export default App;
