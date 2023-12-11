import React from "react";

const skillText = [
    {
      title: "새로운 도전을 즐깁니다.",
      desc: "코딩은 제 인생에 있어서 큰 도전이였습니다. 무슨일을 시작하기 전에 오랫동안 고민하는 성격이였지만 개발이란 직업이 저에게는 고민할 틈도 없이 매력적으로 느껴졌던 이유가 사용자와 컴퓨터의 상호작용을 돕는 직업이라는게 저에게는 엄청난 메리트였던 것 같습니다. 모든 것은 배울 수 있고 가치 있는 것은 쉽게 얻을 수 없다는 사고방식으로 이 분야에 접근하면서 저의 여정은 시작되었습니다. 처음에는 기초가 부족해서 국비학원을 등록하게 되었고 수료하면서 많은 성과를 얻을 수 있었습니다.",
    },
    {
      title: "인터랙티브 웹 개발자",
      desc: "웹 인터랙션은 잘 하는 사람은 보기 드문 분야입니다. 실무에서는 생산성이 중요하므로 좋은 라이브러리를 찾아 잘 쓰는 것도 중요하지만, 원천 기술과 구현 원리에 대한 이해가 중요한 분야 중 하나입니다. 눈에 보이는 동작은 같아도, 바닥부터 직접 만드는 방법을 훈련한 개발자는 숙련도부터 다르다는걸 인지하고 기초 역량을 쌓아 나아가고 있습니다.",
    },
];

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    About Me
                </h2>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;