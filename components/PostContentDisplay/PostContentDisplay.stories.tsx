import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PostContentDisplay } from "./PostContentDisplay";

export default {
    title: "PostContentDisplay",
    component: PostContentDisplay,
} as ComponentMeta<typeof PostContentDisplay>;

const Template: ComponentStory<typeof PostContentDisplay> = () => (
    <PostContentDisplay></PostContentDisplay>
);

export const Story = Template.bind({});
