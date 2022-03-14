import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PostItem } from "./PostItem";

export default {
    title: "PostItem",
    component: PostItem,
} as ComponentMeta<typeof PostItem>;

const Template: ComponentStory<typeof PostItem> = (args) => (
    <PostItem {...args}></PostItem>
);

const commonArg: Parameters<typeof PostItem>[0] = {
    active: false,
    title: "unknown archive 1",
};

export const Normal = Template.bind({});
Normal.args = { ...commonArg };
export const Active = Template.bind({});
Active.args = { active: true, title: "unknwon archive 2" };
