import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PostTitle } from "./PostTitle";

export default {
    title: "PostTitle",
    component: PostTitle,
} as ComponentMeta<typeof PostTitle>;

const Template: ComponentStory<typeof PostTitle> = (args) => (
    <PostTitle {...args}>タイトル</PostTitle>
);

const commonArg: Parameters<typeof PostTitle>[0] = {};

export const Story = Template.bind({});
Story.args = { ...commonArg };
