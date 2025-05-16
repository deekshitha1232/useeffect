
import React, { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [apiData, setApiData] = useState([]);
  const [filtCatData, setFilCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
        setFilCatData(res);
      });
  }, []);

  const handleFilData = (cat) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      setFilCatData(apiData);
    } else {
      const filData = apiData.filter((x) => x.category === cat);
      setFilCatData(filData);
    }
  };

  return (
    <div className={`container theme-${selectedCategory.replace(/\s/g, "")}`}>
      <h3 id="d">✨ Find It. Love It. Buy It- from cart to heart 🛍️🛒❤️</h3>

    
      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Search products..."
       
    
      />

      <div className="btn-group">
        <button className="btn-all" onClick={() => handleFilData("all")}>
          🛒 All
        </button>
        <button
          className="btn-electronics"
          onClick={() => handleFilData("electronics")}
        >
          🔌 Electronics
        </button>
        <button
          className="btn-jewelery"
          onClick={() => handleFilData("jewelery")}
        >
          💎 Jewelery
        </button>
        <button
          className="btn-men"
          onClick={() => handleFilData("men's clothing")}
        >
          👕 Men
        </button>
        <button
          className="btn-women"
          onClick={() => handleFilData("women's clothing")}
        >
          👗 Women
        </button>
      </div>

      <div className="card-grid">
        {filtCatData.map((x) => (
          <div className="card" key={x.id}>
            <img src={x.image} alt={x.title} width={150}/>
            <h3>{x.title}</h3>

            <p className="description">{x.description}</p>

            <h4
              id="c"
            >
              Price: ${x.price}
         
            </h4>

            <div className="rating">
              ⭐ {x.rating?.rate} ({x.rating?.count})
            </div>

            <button>🛒 Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
