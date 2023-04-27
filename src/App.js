import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/Root-Page';
import ErrorPage from './pages/Error-Page';
import Homepage from './pages/Home-Page';
import Wrapper from './helpers/Wrapper';


const router = createBrowserRouter([
  {path: '/', element: <RootPage />, errorElement: <ErrorPage />, children: [
    {index: true, element: <Homepage />},
  ]}
]);

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router}/>
    </Wrapper>
  );
}

export default App;
