import satData from "./satData";
import "./styling.css";

const Buttons = (props) => { //could pass in filterByType, setSat, displaySats instead of props, would have to reference later on as filterByType instead of props.filterByType
  return(
    <div className ="flex-container">
      
      {props.displaySats.map((sat, id) => { //still a little fuzzy on this line - it was given in the directions
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>
          {sat} Orbit
          </button>
        );
      })}
      
      <button onClick={() => props.setSat(satData)}>All Orbit</button> 
    
    </div>
  )
};

export default Buttons;


