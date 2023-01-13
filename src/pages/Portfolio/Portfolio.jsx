import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import Iselect from "../../components/Iselect/Iselect";
import Iinput from "../../components/PortfolioTools/PortfolioTools";
import Project from "../../components/Project/Project";
import "./portfolio.css";

const Portfolio = () => {
  const [datas, setDatas] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/portfolioData")
      .then((res) => res.json())
      .then((res) => setDatas(res));
  }, []);

  const sortData = (sort) => {
    setSelectedSort(sort);
    setDatas(sortedDatas);
  };

  const sortedDatas = useMemo(() => {
    if (selectedSort) {
      return [...datas].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    console.log(datas);
    return datas;
  }, [selectedSort, datas]);

  const sortedAndSearchDatas = useMemo(() => {
    return sortedDatas.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedDatas]);

  return (
    <div className="portfolio__container">
      <div className="portfolio__body">
        <div className="portfolio__body-tools">
          <Iinput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск..."
          />

          <div className="portfolio__body-tools_select">
            <Iselect
              value={selectedSort}
              onChange={sortData}
              dafaultValue="сортировка по"
              option={[
                { value: "title", name: "По названию" },
                { value: "teg", name: "По тегу" },
                { value: "technologies", name: "По технологии" },
              ]}
            />
          </div>
        </div>

        <div className="portfolio__body-content">
          {sortedAndSearchDatas.length ? (
            sortedAndSearchDatas.map((el, index) => (
              <Project
                key={index}
                title={el.title}
                technologies={el.technologies}
                teg={el.teg}
              />
            ))
          ) : (
            <div>Проект не найден </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
