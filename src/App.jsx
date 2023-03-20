import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

const App = () => {
  const { items } = useSelector(store => store.cart);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
