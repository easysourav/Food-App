
import AddFoodData from './components/AddFoodData';

import OrderSection from './components/OrderSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';
// import AddTableData from './components/AddTableData';

function App() {
  return (
    // <div className="Container">
    //   {/* <AddFoodData /> */}
    //   <OrderSection />
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderSection />} />
        <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>

    // <AddTableData/>
  );
}

export default App;
