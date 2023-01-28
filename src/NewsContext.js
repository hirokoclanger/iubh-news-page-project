import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {

  //Generate a new state for the current data and set a default value for the category
  const [data, setData] = useState();
  const [category, setCategory] = useState('Business');
  const [region, setRegion] = useState('US');
  const apiKey = "a9f9dc72ca3f42da874a9299ebdd19d7";

  // Update the Category by selecting the value of from the current Button Item
  function updateCategory(e){
    const item = e.target.value;
    setCategory(item);
  }

  // Update the Region by selecting the value of from the current Button Item
  function updateRegion(e){
    const reg = e.target.value;
    setRegion(reg);
  }

  // generate a asynchronous request with the current selecten category and the given apiKey
  // try the connection and return the response as a data object, else return error to the console
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=${region}&category=${category}&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [category, region]);

  return (
  
    <section> 
    <div className="category-wrapper"> 
      <div className="region-selection" >
          <select onChange={updateRegion}>
            <option value="US">United States</option>
            <option value="DE">Germany</option>
            <option value="JP">Japan</option>
            <option value="CN">China</option>
            <option value="FR">Frances</option>
            <option value="GB">Great Britain</option>
            <option value="SK">Sweden</option>
            <option value="PL">Poland</option>
          </select>
        </div>
        <div className="category-selection">
          <ul>
            <button value="General" onClick={updateCategory}>General</button>
            <button value="Science" onClick={updateCategory}>Science</button>
            <button value="Entertainment" onClick={updateCategory}>Entertainment</button>
            <button value="Business" onClick={updateCategory}>Business</button>
            <button value="Health" onClick={updateCategory}>Health</button>
            <button value="Sports" onClick={updateCategory}>Sports</button>
            <button value="Technology" onClick={updateCategory}>Technology</button>
          </ul>
        </div>
    </div>
    <NewsContext.Provider value={{ data, category, region }} >
      {props.children}
    </NewsContext.Provider>
    </section>
  );
};
