import Card from "./Card";
import React from "react";
import ExploreContainer from "./ExploreContainer";
import SidebarProfile from "./SidebarProfile";

const Sidebar = () => {
  const recent = [
    { icon: "groups", text: "User experience" },
    { icon: "tag", text: "professionalwomen" },
    { icon: "tag", text: "userexperience" },
    { icon: "tag", text: "innovation" },
    { icon: "tag", text: "userinterfacedesign" },
  ];
  const groups = [
    { icon: "groups", text: "Premium Carrer Group" },
    { icon: "groups", text: "Web & User Experience" },
    { icon: "groups", text: "Web Usability (UI & UX) and ho..." },
  ];
  return (
    <div className="hidden lg:block md:col-span-3">
      <SidebarProfile />
      <Card
        data={{
          title: "Explore",
          ending: "Explore more",
          arrow: "KeyboardArrowRight",
        }}
      >
        <ExploreContainer title="Recent" items={recent} />
        <ExploreContainer title="Groups" items={groups} />
      </Card>
    </div>
  );
};

export default Sidebar;
