import { Button } from 'reactstrap';
import './App.css';
import LinkButton from './components/LinkButton';
import Header from './components/ProfileHeader';
import buttonName from './buttonNames';

function App() {
  return (
    <div className="App">
      <Button></Button>
      <Header />
      {buttonName.map(button => {
        return <LinkButton text={button.text} />
      })}
    </div>
  );
}

export default App;
