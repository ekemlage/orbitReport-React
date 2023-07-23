import satData from "./satData";


const Buttons = (filterByType, setSat, displaySats) => { //added 3 props
  return(
    <div>
      
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
        );
      })};
      
      <button onClick={() => setSat(satData)}>This should show every sat?</button>
    
    </div>
  )
};

export default Buttons;

//new stuff
