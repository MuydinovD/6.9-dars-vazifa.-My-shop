import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ColorContiner from '../components/ColorContiner';

function MainLayout() {
  return (
    <div>
      <Navbar />
      <ColorContiner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
