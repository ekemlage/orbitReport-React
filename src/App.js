import {useState} from "react"; //added curly {}
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData); // what is sat vs setSat? // what is useState?
  const displaySats = [...new Set(satData.map((data) => data.orbitType))]; //gets array of low, med, high types w/o repeats because of set
  const filterByType = (currentType) => {
    const displaySats = 
    satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === 
       currentType;
    });
    setSat(displaySats);
  };
  return (
    <div>
      <Banner />
      <Buttons 
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;
