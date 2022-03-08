import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PostCard } from "./PostCard";

export default {
    title: "PostCard",
    component: PostCard,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
    <PostCard {...args}></PostCard>
);

const commonArg: Parameters<typeof PostCard>[0] = {
    title: "Title",
};

export const Story = Template.bind({});
Story.args = { ...commonArg };
