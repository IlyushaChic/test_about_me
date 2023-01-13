import React, { useEffect, useState } from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import "./blog.css";
const Blog = () => {
  let [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:3001/blogData")
      .then((res) => res.json())
      .then((res) => setDatas(res));
  }, []);
  return (
    <div className="blog__container">
      <div className="blog__body">
        {datas.map((el,index) => (
          <BlogItem
          key={index}
            title={el.title}
            img={el.img}
            text={el.text} 
            date={el.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
