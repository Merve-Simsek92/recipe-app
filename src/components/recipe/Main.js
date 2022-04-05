import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Main.module.css"
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "7fe155f8";
const APP_KEY = "0273acfbf337ddca2af898d196fa124b";

const Main = () => {
  const [searchText, setSearchText] = useState([]);
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  const [data, setData] = useState([]);
  const createSearch=()=>{
      axiosRecipe()
  }

  const handleChance = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };



  const axiosRecipe = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
    );
    console.log(res);
    setData(res.data.hits);
  };

  const selectChange = (e) => {
    setMeal(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosRecipe()
  };

  return (
    <div>
      <h1>FOOD APP</h1>
      <div>
        <form  onSubmit={handleSubmit}>
          <input type="search" onChange={handleChance}></input>
          <button type="submit">
            Search
          </button>
          <select name="cars" id="cars" onChange={selectChange}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </form>
      </div>
      <div className="result">
        {data.length >0 && data.map((item,index) => {
          return (
            <div  className={styles.cardContainer}>
              <h1>{item.recipe.label}</h1>
              <div>
                
                <img src={item.recipe?.image} />
              </div>
              {/* <link to={`/recipeCard`} key={index}> */}
              <div> <button>View More</button></div>
                
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
