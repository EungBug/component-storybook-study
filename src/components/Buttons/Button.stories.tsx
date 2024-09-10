import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from "./Button";

const meta = {
  title: 'common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    componentSubtitle: "기본 버튼 컴포넌트"
  },
  tags: ['autodocs'],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Primary: Story = {
  args: {
    height: '40px',
    children: "버튼"
  }
};
