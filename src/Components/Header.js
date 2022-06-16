// COMPONENTE PRESENTACIONAL
// saludar es una funcion callback, que llama el componente hijo y la ejecuta el padre
const Header = ({ app, children, name, saludar }) => {
  // console.log('Header props:', { app, name });
  console.log(children)
  return (
    // empty tag
    <> 
      <h1>HEADER {name} {5+5}</h1>
      <h3> App: {app}</h3>
      <button onClick={saludar}>CLICK AQUI</button>
      {children}
    </>
  );
};

export default Header