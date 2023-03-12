import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState('poi');

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="">
      <h1 className="text-blue-600">Hello world!</h1>
    </div>
  );
}

export default App;
