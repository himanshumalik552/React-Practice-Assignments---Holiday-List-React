import "./../styles/App.css";
import React from "react";

const App = () => {
  //  const[cityName,setCityName] = useState("");
  //  const[cityName,setCityName] = useState("");

  const cityList = [
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" },
    
  ];
  const finalArr = cityList.filter((element, index, arr) => {
    return element.country === "India";
  });
  let array = [];
  const finalCity = finalArr.map((element, index, arr) => {
    // console.log(array);
    if (!array.includes(element.name)) {
      array.push(element.name);
      // console.log(array);
      return <li key={`location${index + 1}`}>{element.name}</li>;
    }
  });
  // console.log({finalCity});

  return (
    <div id="main">
      <ol>{finalCity}</ol>
    </div>
  );
};
export default App;