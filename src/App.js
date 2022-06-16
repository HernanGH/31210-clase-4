import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Header from './Components/Header';
import Input from './Components/Input';

// FUNCIONAL COMPONENT
// COMPONENTE CONTENEDOR
function App(props) {
  // vincular el estado de react aca
  const [temas] = useState(['Javascript', 'React JS', 'Components'])
  
  console.log(temas)
  
  const saludar = () => console.log('HOLA SOY EL COMPONENTE PADRE')

  return (
    <div>
      <Header name='coderhouse' app='Aplicacion en ReactJS' saludar={saludar}>
        <div>
          <h4>CODERHOUSE</h4>
          <p>Academia online</p>
        </div>
      </Header>
      <Header name='zoom' app='Aplicacion en VueJS' saludar={saludar}>
        <div>
          <h3>ZOOM</h3>
          <ul>
            <li>CHAT</li>
            <li>VIDEOLLAMADA</li>
            <li>ONLINE</li>
          </ul>
        </div>
      </Header>
      <Header name='google' app='Aplicacion en Angular' saludar={saludar}>
        <Input placeholder='Ingrese busqueda' />
      </Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
        <Input placeholder='Ingrese nombre' />
        <Input placeholder='Ingrese apellido' />
        <Input placeholder='Ingrese DNI' />
        <Input placeholder='Ingrese direccion' />
      </div>
      <ul>
        {temas.map((item) => (<li>{item}</li>))}
      </ul>
    </div>
  );
}

// FUNCIONAL COMPONENT
const AppArrowFunction = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// CLASS COMPONENT
class AppClassComponent extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
