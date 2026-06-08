import './App.css';
import { Card } from './components/card';  
import Subjects from './mocks/subjects-mock.json'     //named export from card.jsx, so we need to use the same name when importing, and we need to wrap it in curly braces

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <h1>If you want to be a WEB Developer, you should go through these courses!</h1>

        {Subjects.map((subject, index) => (
          <Card 
            key={index}
            title={subject.title}
            technology={subject.technology}
            subtitle={subject.subtitle}
            description={subject.description}
          />
        ))}
      </div>
      
    </div>
  );
}

export default App;
