import * as React from 'react';
import './App.css';
import Container from './components/Container';
import Card from './components/Card';
import Input from './components/Input';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro text='texto1' />
      <Intro />
    </div>
    // <Container>
    //   <Card>
    //     <Input placeholder='Correo' label='Correo' />
    //     <Input placeholder='Contraseña' label='Contraseña' />

    //   </Card>
    // </Container>
  );
}

export default App;
