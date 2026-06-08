import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroScrollWrapper } from './components/layout/HeroScrollWrapper';
import { DemoSection } from './components/sections/DemoSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

function App() {
  return (
    <div style={{ minHeight: '100dvh', background: '#160408', color: '#fffaf7' }}>
      <Navbar />
      <main>
        <HeroScrollWrapper />
        <DemoSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
