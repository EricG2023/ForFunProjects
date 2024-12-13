import React from "react";
import AboutMe from "./AboutMe";

export default {
  title: "Pages/About Me",
  component: AboutMe,
};

const Template = (args) => <AboutMe {...args} />;

export const Default = Template.bind({});
Default.args = {};
