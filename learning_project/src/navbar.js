const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The coder web App</h1>
            <div className="links">
                <a ahref= "/">Home</a>
                <a ahref= "/create" /*style={{
                    //in css we use style = "", but here if we want to give we will give this as an object
                    //and we will not use as border-radius but we use camel case as borderRadius.
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}*/>New App</a>
            </div>

        </nav>
      );
}
 
export default Navbar;