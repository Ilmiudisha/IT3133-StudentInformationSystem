import logo from './logo.svg';
import './App.css';
import { students } from './data/studentDB';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Student Information Portal</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 

export default App;
