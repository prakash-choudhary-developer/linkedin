import React from "react";
import Card from "./Card";
import WidgetCard from "./WidgetCard";
import WidgetCardJob from "./WidgetCardJob";

const Widgets = () => {
  const todaysItem = [
    {
      title: "Star Wars: Official Updates",
      time: "1h",
      readers: "309",
      latest: false,
    },
    {
      title: "Prison enters lockdown",
      time: "12h",
      readers: "202",
      latest: true,
    },
    {
      title: "Job interview process",
      time: "23h",
      readers: "23,349",
      latest: false,
    },
    {
      title: "Business Y forced to close shops",
      time: "1h",
      readers: "309",
      latest: false,
    },
    {
      title: "Football 2020: Official Updates",
      time: "1h",
      readers: "309",
      latest: false,
    },
  ];

  const jobsPickedForYou = [
    {
      avatar:
        "https://hrmcdn-13a1c.kxcdn.com/images/hr-sg/content-images/priya-june-2020-patrick-tay-work-from-home-lead-istock.jpg",
      title: "Junior Digital Designer",
      company: "Company X",
      area: "Bristol, United Kingdom",
    },
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPhabqx0zV4o9irW_QpXB3-V9dgEJTakH3A&usqp=CAU",
      title: "Senior Engineer",
      company: "Company Y",
      area: "London, United Kingdom",
    },
  ];
  return (
    <section className="col-span-12 lg:col-span-3">
      <Card
        data={{
          title: "Today's news",
          ending: "Read more",
          arrow: "KeyboardArrowDown",
        }}
      >
        <div>
          {todaysItem.map((i) => (
            <WidgetCard
              title={i.title}
              time={i.time}
              readers={i.readers}
              latest={i.latest}
              key={i.title}
            />
          ))}
        </div>
      </Card>
      <Card
        data={{
          title: "Jobs picked for you",
          ending: "See more jobs",
          arrow: "KeyboardArrowDown",
        }}
      >
        <div>
          {jobsPickedForYou.map((i) => (
            <WidgetCardJob
              title={i.title}
              avatar={i.avatar}
              company={i.company}
              area={i.area}
              key={i.title}
            />
          ))}
        </div>
      </Card>
    </section>
  );
};

export default Widgets;
