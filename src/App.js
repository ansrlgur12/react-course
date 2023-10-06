// import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import AllMeetUp from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    // <div>
    //   <h1>My Todos</h1>
    //   <Todo title="제목 1" />
    //   <Todo title="제목 2" />
    //   <Todo title="제목 3" />
    // </div>
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetUp />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
