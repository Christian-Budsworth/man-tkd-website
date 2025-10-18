import { LinkIcon } from './LinkIcon';
import youtube from '../../../images/socials/youtube.png';
import facebook from '../../../images/socials/facebook.svg';

export default {
  title: 'Molecules/LinkIcon',
  component: LinkIcon,
  tags: ['autodocs'],
  argTypes: {
    external: { control: 'boolean' },
    'iconProps.size': {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    'iconProps.shape': {
      control: { type: 'inline-radio' },
      options: ['square', 'rectangle'],
    },
  },
};

const Template = (args) => <LinkIcon {...args} />;

export const YouTube = Template.bind({});
YouTube.args = {
  to: 'https://www.youtube.com/@YourChannel',
  external: true,
  ariaLabel: 'Visit our YouTube channel',
  iconProps: { src: youtube, size: 'md', alt: 'YouTube' },
};

export const Facebook = Template.bind({});
Facebook.args = {
  to: 'https://www.facebook.com/YourPage',
  external: true,
  ariaLabel: 'Visit our Facebook page',
  iconProps: { src: facebook, size: 'md', alt: 'Facebook' },
};
