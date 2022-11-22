import './assets/styles/_global.css';
import Header from './components/header';
import Skills from './components/skills';
import Work_exp from './components/work_exp';
import experience from './data/experience';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Skills />
      <Work_exp experience={experience} />
    </div>
  );
}

export default App;