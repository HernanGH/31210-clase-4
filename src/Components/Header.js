const Header = ({ app, name }) => {
  console.log('Header props:', { app, name });

  return (
    // empty tag
    <> 
      <h1>HEADER {name} {5+5}</h1>
      <h3> App: {app}</h3>
    </>
  );
};

export default Header