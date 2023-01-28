import "./portfolioList.scss";
import React from "react";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}
