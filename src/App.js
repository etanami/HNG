import './App.css';
import Header from './components/ProfileHeader';
import Socials from './components/Socials';
import Footer from './components/Footer';
import LinkSection from './components/LinkSection';
import LinkData from './LinkData';

function App() {
  return (
    <div className="App">
      <Header />
      {LinkData.map(data => {
        return <LinkSection 
            key={data.uid}
            name={data.name}
            href={data.link}
            id={data.id}
            title={data.title}
          />
      })}
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
