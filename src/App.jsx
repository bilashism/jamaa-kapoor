import { useSelector } from 'react-redux';

function App() {
  const { items } = useSelector(store => store.cart);

  return (
    <>
      <h1 className="text-blue-600">{items.length}</h1>
    </>
  );
}

export default App;
