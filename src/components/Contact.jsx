import React from "react";
import icon from "../assets/img/imo.png";

const contactText = [
  {
      link: "https://open.kakao.com/o/sJIuqr3d",
      title: "KAKAO : 삐약이방",
  },
  {
      link: "mailto: doobi1110@naver.com",
      title: "mail : doobi1110@naver.com",
  },
];


const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="contact__text">
                <div className="img">
                        <img src={icon} alt="어바웃" />
                    </div>
                <div className="text">
                    {contactText.map((contact, key) => (
                        <div key={key}>
                            <a
                                href={contact.link}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                {contact.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
                <div className="contact__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;