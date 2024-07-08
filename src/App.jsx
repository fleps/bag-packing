import ItemList from './components/ItemList';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <TopBar />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
