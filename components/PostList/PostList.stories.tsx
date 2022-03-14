import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PostList } from "./PostList";

export default {
    title: "PostList",
    component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = () => <PostList></PostList>;

export const Story = Template.bind({});
