import React, { useEffect, useRef } from "react";
import port01 from "../assets/img/port01.png";
import port02 from "../assets/img/port02.png";
import port03 from "../assets/img/port03.png";
import port04 from "../assets/img/port04.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        title: "restarea-food",
        desc: "React+NodeJs(프론트+서버)",
        img: port02,
        code: "https://github.com/ddyy214/restarea-food",
        view: "/",
        name: "휴게소맛집 찾기",
    },
    {
        num: "03",
        title: "movie_app",
        desc: "React 클론코딩",
        img: port03,
        code: "/",
        view: "/",
        name: "뮤비평점앱",
    },
    {
        num: "04",
        title: "portfolio",
        desc: "React(netlify배포)",
        img: port04,
        code: "https://github.com/ddyy214/portfolio-site",
        view: "/",
        name: "포트폴리오",
    },
];

const Port = () => {
    const horizontalRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionsRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length-1),
            ease: "none",
            scrollTrigger: {
            trigger: horizontal,
            start: "top 56px",
            end: () => "+=" + horizontal.offsetWidth,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            },
        });
    
        return () => {
            scrollTween.kill();
          };
        }, []);
      
  return (
    <section id="port" ref={horizontalRef}>
          <div className="port__inner">
              <div className="port__title">
                  portfolio
              </div>
              <div className="port__wrap">
                  {portText.map((port, key) => (
                      <article className={`port__item p${key + 1}`} 
                      key={key}
                      ref={(el) => (sectionsRef.current[key] = el)
                      }>
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