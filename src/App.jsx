import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './Weather';
import './index.css';

function App() {
  return (
    <>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-sm-5 bg-info fill'>
          <h1 className='text-center mt-5'>Weather App</h1>
          <Weather/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
