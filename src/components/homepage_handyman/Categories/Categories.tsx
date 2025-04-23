import React, { useState } from "react";
import PageIndicator from "../../onboarding/pageIndicator/PageIndicator";
import categoryData, { CategoryData } from "./data/categoryData";
import "./Categories.css";

interface CategoriesProps {
  data?: CategoryData[];
}

const Categories: React.FC<CategoriesProps> = ({ data = categoryData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="categories-container">
      <h1>What you can offer</h1>
      <div className="categories-grid">
        {currentData.map((item) => (
          <div key={item.id} className="data-card">
            <img
              src={item.imageUrl}
              alt={item.title || `Category ${item.id}`}
              className="data-image"
            />
            {item.title && <div className="data-title">{item.title}</div>}
          </div>
        ))}
      </div>

      <PageIndicator
        total={totalPages}
        activeIndex={currentPage}
        onClick={handlePageChange}
      />
    </div>
  );
};

export default Categories;
