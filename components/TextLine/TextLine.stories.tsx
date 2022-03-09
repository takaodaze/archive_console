import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextLine } from "./TextLine";

export default {
    title: "TextLine",
    component: TextLine,
} as ComponentMeta<typeof TextLine>;

const Template: ComponentStory<typeof TextLine> = (args) => (
    <TextLine {...args}></TextLine>
);

const commonArg: Parameters<typeof TextLine>[0] = {
    content: "hoge hoge hoge",
    duration: 100,
};

export const Story = Template.bind({});
Story.args = { ...commonArg };
