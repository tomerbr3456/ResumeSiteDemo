import './App.css';
import Header from './Header';
import Footer from './Footer';
import Links from './Links';
import Projects from './Projects';
import AboutMe from './AboutMe';


function App() {
  return (
    <div id={'startElement'} >
      <Header />
      <Footer/>
      <Links/>
      <Projects/>
      <AboutMe/>
    </div>
  );
}

export default App;
