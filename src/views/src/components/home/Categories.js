import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

function Categories({ activeCategory, setActiveCategory }) {
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null); // 호버된 부모 카테고리 상태 추가
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false); // 카테고리 보이기/숨기기 상태 추가

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/categories`);
        const json = await response.json();
        setCategories(json);
      } catch (e) {
        console.error('백엔드 접속 에러', e);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategoriesVisibility = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  const handleMouseEnter = (category) => {
    setHoveredCategory(category.categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="category-container">
      <div className="category-button-container">
        <button onClick={toggleCategoriesVisibility} className="category-toggle-button">카테고리</button>
      </div>
      {isCategoriesVisible && (
        <div className="navbar">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div
                key={category.categoryId}
                className={`navbar-item ${activeCategory === category.categoryName ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={category.subCategories && category.subCategories.length > 0 ? '#' : `/category/${category.categoryId}/books`}>
                  {category.categoryName}
                </Link>
                {hoveredCategory === category.categoryName && category.subCategories.length > 0 && (
                  <div className="sub-categories">
                    <div className="sub-category-header">
                      <h2>{hoveredCategory}</h2>
                    </div>
                    <div className="sub-category-list">
                      {category.subCategories.map((subCategory) => (
                        <div key={subCategory.categoryId} className="sub-category-item">
                          <Link to={`/category/${subCategory.categoryId}/books`}>
                            {subCategory.categoryName}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="no-categories">카테고리가 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Categories;
