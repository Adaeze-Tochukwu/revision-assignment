import React from "react";
import "./Category.scss";
import EasyCategory from "../easy/EasyCategory.scss";

export default function Category() {
  return (
    <div className={EasyCategory}>
      <div className="category">
        <div className="category__all">Category 1</div>
        <div className="category__all">Category 2</div>
        <div className="category__all">Category 3</div>
      </div>
    </div>
  );
}
