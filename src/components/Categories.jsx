import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>POPULAR CATEGORIES</h1>
      <p>
      Discover our extensive selection of hotel 
      rooms tailored to every kind of Guest. 
      Experience the local charm, indulge in 
      premium comfort, and create 
      unforgettable memories at your ideal taste.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
