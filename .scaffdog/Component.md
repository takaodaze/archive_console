---
name: 'Component'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  component_name: 'Please name of component'
---

# Variables

- computed_component_name: `{{ inputs.component_name | pascal }}`


# `{{ computed_component_name }}/{{ computed_component_name }}.tsx`

```tsx
type Props = {
    // if unnecessary, delete it.
}

export const {{ computed_component_name }} = (props:Props) => {
    return <></>
}
```

# `{{ computed_component_name }}/{{ computed_component_name }}.spec.tsx`

```tsx
import { render } from "@testing-library/react";
import { {{ computed_component_name }} } from "./{{ computed_component_name }}";

describe("<{{ computed_component_name }} />", () => {
    it("what inspecting?", () => {
        const screen = render(
            <{{ computed_component_name }} />
        );
    });
});

```

# `{{ computed_component_name }}/{{ computed_component_name }}.stories.tsx`

```tsx
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { {{ computed_component_name }} } from "./{{ computed_component_name }}";

export default {
    title: "{{ computed_component_name }}",
    component: {{ computed_component_name }},
} as ComponentMeta<typeof {{ computed_component_name }}>;

const Template: ComponentStory<typeof {{ computed_component_name }}> = (args) => (
    <{{ computed_component_name }} {...args}></{{ computed_component_name }}>
);

const commonArg: Parameters<typeof {{ computed_component_name }}>[0] = {

};

export const Story = Template.bind({});
Story.args = {...commonArg};
```