import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="bg-[#f5f9fc] w-screen min-h-screen">
      <Header />
      <main className="container mx-auto grid grid-cols-12 mt-16">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export default App;
