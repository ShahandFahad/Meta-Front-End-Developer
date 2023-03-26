//   Usig useEffect Hook
  
  function WelocomeUser() {
    const [toggle, setToggle] = useState(false);

    function clickHandler() {
      setToggle(!toggle);
    }

    // update title of the page
    // update will occur as a result of change to
    // toggle variable, inside the dependency array
    useEffect(() => {
      document.title = toggle ? 'Welocme to the App' : 'Using useEffect hook';
    },[toggle]);

    return(
      <div>
        <h1>Using the Use Effect Hook</h1>
        <button onClick={clickHandler}>
          Toggle Message
        </button>
        {toggle && <h1>Welocme to the App</h1>}
      </div>
    );
  }