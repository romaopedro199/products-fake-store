import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import ButtonHover from "@/components/common/button-hover";

const meta = {
  title: "Components/ButtonHover",
  component: ButtonHover,
  args: { onClick: fn() },
} satisfies Meta<typeof ButtonHover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    disabled: false,
    transparent: false,
    type: "button",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
    transparent: false,
    type: "button",
  },
};

export const Transparent: Story = {
  args: {
    children: "Transparent Button",
    disabled: false,
    transparent: true,
    type: "button",
  },
};

export const Submit: Story = {
  args: {
    children: "Submit",
    disabled: false,
    transparent: false,
    type: "submit",
  },
};
