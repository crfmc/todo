// Import features
import Header from './reducers/features/header/Header'
import TodoList from './reducers/features/todos/TodoList';
import Footer from './reducers/features/footer/Footer'

import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
