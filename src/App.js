// import Dashboard from './screens/dashboard'
// import Login from "./screens/Login";
// import Signup from "./screens/Signup";
// import Homescreen from './screens/Homescreen'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
//   Routes
// } from 'react-router-dom';

// function App() {

//   // const routes = [
//   //   <Route path="/" element={<HomeScreen />} />,
//   //   <Route path="/sign-up" element={<Signup />} />,
//   //   <Route path="/login" element={<Login />} />,
//   //   // <Route path="/contact" element={<Contact />} />,
//   // ]
  
//   // const router = createBrowserRouter(createRoutesFromElements(routes))
//   return (
//     <div className="">
//       {/* <RouterProvider router={router} /> */}
//       <Routes>
//         <Route 
//           path="/"
//           element={
//             <Dashboard>
//               <Homescreen />
//             </Dashboard>
//           }
//         />

// <Route 
//           path="/sign-up"
//           element={
//             <Signup />
//           }
//         />

// <Route 
//           path="/sign-in"
//           element={
//             <Login />
//           }
//         />
//       </Routes>
//      {/* <Signup /> */}
//     </div>
//   );
// }

// export default App;



import Dashboard from './screens/dashboard';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Homescreen from './screens/Homescreen';
import { createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {
  // const routes = [
  //   <Route path="/" element={<HomeScreen />} />,
  //   <Route path="/sign-up" element={<Signup />} />,
  //   <Route path="/login" element={<Login />} />,
  //   // <Route path="/contact" element={<Contact />} />,
  // ]

  // const router = createBrowserRouter(createRoutesFromElements(routes));
  
  return (
    <div className="">
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <Homescreen />
            </Dashboard>
          }
        />

        <Route
          path="/sign-up"
          element={
            <Signup />
          }
        />

        <Route
          path="/sign-in"
          element={
            <Login />
          }
        />
      </Routes>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
