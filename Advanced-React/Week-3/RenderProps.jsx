import { useState, useEffect, React } from "react";

// Example of render props

const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([]);


  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["Cake" , "Ice-Cream", "Pie", "Brownie"]);
    } else {
      setData(["Water", "Soda", "Juice"]);
    }
  }, []);

  return render(data);
}


// Display result on screen
function displayResult(data, about) {
  return (
    <div>
      <h3>Number of {about} are {data.length}.</h3>
      <ul>
        {
          data.map(
            (item) => <li key={item}>{item}</li>
          )
        }
      </ul>
    </div>
  );
}

const DessertCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"

      // render={(data) => <p>{data.length} desserts.</p>}
      render={(data) => displayResult(data, "Desserts.")}
      />
  );
};

const DrinkCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"

      // render={(data) =>  <p>{data.length} drinks.</p>}

      render={(data) => displayResult(data, "Drinks")}
      />
  );
}



export default function RenderProps() {
  return (
    <div>
    <DessertCount />
    <DrinkCount />
    </div>
  );
}
