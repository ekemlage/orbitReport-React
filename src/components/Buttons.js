import satData from "./satData";


const Buttons = (props) => { //could pass in filterByType, setSat, displaySats instead of props, would have to reference later on as filterByType instead of props.filterByType
  return(
    <div>
      
      {props.displaySats.map((sat, id) => { //props.displaySats
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
        );
      })};
      
      <button onClick={() => props.setSat(satData)}>This should show every sat?</button> 
    
    </div>
  )
};

export default Buttons;

//new stuff
