import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/pages/Home/Home"
import { Characters } from "./components/pages/Characters/Characters"
import { Episodes } from "./components/pages/Episodes/Episodes"
import { Location } from "./components/pages/Locations/Location"

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/characters' element={<Characters/>}></Route>
      <Route path='/episodes' element={<Episodes/>}></Route>
      <Route path='/location' element={<Location/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
