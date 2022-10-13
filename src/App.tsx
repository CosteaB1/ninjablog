import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';
  return (
    <div className="App">
      <div className="content"></div>
      <h1>{title}</h1>
      <p>Liked {likes} time</p>
      {/* dynamic variable  */}

      <p>{10}</p>
      <p>{'Hello, ninjas'}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>
      <a href={link}>Google Site</a>
    </div>
  );
}

export default App; //we use export so we can use this component in other files. It is a must!
