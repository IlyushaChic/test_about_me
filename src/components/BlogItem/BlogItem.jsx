import React from "react";
import "./blogitem.css";
const BlogItem = ({ title, img, text, date }) => {
  function limitStr(str, n, symb) {
    if (!n && !symb) return str;
    symb = symb || "...";
    return str.substr(0, n - symb.length) + symb;
  }
  if (text.length > 120) {
    text = limitStr(`${text}`, 120);
  }

  return (
    <div className="blog__bodys">
      <div className="blog__body-title">{title}</div>
      <div
        className="blog__body-img"
        style={{ background: `url(${img}) 0 0 / cover no-repeat` }}
      />
      <div className="blog__body-text">{text} </div>
      <div className="blog__body-date">{date} </div>
    </div>
  );
};

export default BlogItem;
