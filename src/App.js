import Header from './components/layout/Header';

import Meals from './components/meals/Meals';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;