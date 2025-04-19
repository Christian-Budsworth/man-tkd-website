import { Text } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
  },
};

/**
 * ‑‑ Default “playground” story – everything configurable in Controls tab
 */
export const Playground = {
  args: {
    children: 'Lorem ipsum dolor sit amet',
    size: 'medium',
    color: 'default',
    bold: false,
    italic: false,
  },
};

/**
 * ‑‑ Optional: pre‑canned variants that show up in the sidebar list
 */
export const Headline = {
  args: {
    children: 'Headline text',
    size: 'large',
    bold: true,
  },
};

export const Caption = {
  args: {
    children: 'Caption text',
    size: 'small',
    color: 'secondary',
    italic: true,
  },
};
