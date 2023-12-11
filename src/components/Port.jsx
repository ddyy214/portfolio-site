import React from "react";
import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";

const portText = [
  {
      num: "01",
      title: "Todo_List",
      desc: "React+Firebase(프론트+서버+배포)",
      img: port01,
      code: "https://github.com/ddyy214/todo-list-app",
      view: "https://todo-list-app-3554d.web.app/",
      name: "Todo List",
  },
  {
    num: "02",
    title: "Todo_List",
    desc: "React+NodeJs(프론트+서버)",
    img: port02,
    code: "https://github.com/ddyy214/restarea-food",
    view: "/",
    name: "Todo List",
},
 
];

const Port = () => {
  return (
      <section id="port">
          <div className="port__inner">
              <div className="port__title">
                  portfolio
              </div>
              <div className="port__wrap">
                  {portText.map((port, key) => (
                      <article className={`port__item p${key + 1}`} key={key}>
                          <span className="num">{port.num}.</span>
                          <a href={port.code} target="_blank" className="img" rel="noreferrer">
                              <img src={port.img} alt={port.name} />
                          </a>
                          <h3 className="title">{port.title}</h3>
                          <p className="desc">{port.desc}</p>
                          <a href={port.view} target="_blank" className="site" rel="noreferrer">사이트 보기</a>
                      </article>
                  ))}
              </div>
          </div>
      </section>
  );
};

export default Port;