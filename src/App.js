import "./styles.css";
import Student from "./components/Student";
export default function App() {
  return (
    <div className="App">
      <h1>Leaders Board</h1>
      <Student name="Unzilla" uni="MUET" score={350} />
      <Student name="Tansha" uni="NED" score={349} />
      <Student name="Bisma" uni="IBA" score={320} />
    </div>
  );
}
