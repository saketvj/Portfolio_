import "./portfolio.scss";
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);
  const list = [
    {
      title: "Featured",
      id: "featured",
    },
    {
      title: "Web App",
      id: "web",
    },
    {
      title: "Mobile App",
      id: "mobile",
    },
    {
      title: "Design",
      id: "design",
    },
    {
      title: "Content",
      id: "content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  // const item = list[2];

  return (
    <div className="portfolio " id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {/* {item.title} */}
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
