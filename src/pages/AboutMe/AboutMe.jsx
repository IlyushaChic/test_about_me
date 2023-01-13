import React from "react";
import "./about_me.css";

const AboutMe = () => {
  //деструктуриую и добавлю в bd.js
  let skills = [
    { id: 1, skill: "JavaScript" },
    { id: 2, skill: "TypeScript" },
    { id: 3, skill: "HTML/CSS" },
    { id: 4, skill: "React" },
    { id: 5, skill: "Redux" },
    { id: 6, skill: "NextJS" },
    { id: 7, skill: "MobX" },
    { id: 8, skill: "Effector" },
    { id: 9, skill: "NodeJS" },
    { id: 10, skill: "PostgreSQL" },
    { id: 11, skill: "GIT" },
  ];
  let blockJob = [
    {
      id: 1,
      title: "Бэкэнд авторизации финтех-приложения",
      text: "  Разработка авторизации корпоративных приложений с поддержкой  безопасности.",
      stack:
        "NodeJS, JavaScript, Git,  PostgreSQL, sequelize, JWT, Swagger, Postman",
    },
    {
      id: 2,
      title:
        "Админ-панель для корпоративного приложения по изучению  английского языка fintech компании",
      text: "Безопасное приложение для взаимодействия с приложением",
      stack:
        "Backend: NodeJS, PostgreSQL REST API <br /> Frontend: React,  Effector ",
    },
  ];

  const BlockJobe = ({ text, stack, title }) => {
    return (
      <div className="aboutMe__body-experience-item">
        <div>
          <div>{title}</div>
          {text}
        </div>
        <br />
        <span>Cтек технологий:</span> <br />
        {stack}
      </div>
    );
  };

  return (
    <div className="aboutMe__container">
      <div className="aboutMe__body">
        <div className="aboutMe__body-description">
          <b>Обо мне: </b>
          <div className="aboutMe__body-description_item">
            Я Frontend разработчик с полуторагодичным опытом работы. Постоянно
            узнаю что-то новое из мира программирования. Активно занимаюсь
            Computer Science. Есть опыт работы в одной из ведущих fintech
            компаний страны. Ценю, когда в команде есть взаимо-выручка и
            поддержка
          </div>
        </div>
        <div className="aboutMe__body-img_moreinfo">
          <div className="aboutMe__img-container">
            <div className="aboutMe__img"></div>
          </div>
          <div className="aboutMe__body-img_moreinfo-education">
            <b>Образование:</b>
            <div className="aboutMe__body-img_moreinfo-college">
              ЮЖНОУ-УРАЛЬСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ <br />
              Системное программирование, Программная инженерия
            </div>
          </div>
        </div>
        <div className="aboutMe__body-experience">
          <b>Опыт работы:</b>
          {blockJob.map((el) => (
            <BlockJobe text={el.text} stack={el.stack} title={el.title} />
          ))}
        </div>
        <div className="aboutMe__hardskills-container">
          Hard Skills:
          <div className="aboutMe__hardskills-body">
            {skills.map((el) => (
              <div key={el.id}>{el.skill} |</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
