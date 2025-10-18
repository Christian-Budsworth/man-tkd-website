import { Socials } from './Socials';
import youtube from '../../../images/socials/youtube.png';
import facebook from '../../../images/socials/facebook.svg';
import whatsapp from '../../../images/socials/whatsapp.svg';

export default {
  title: 'Molecules/Socials',
  component: Socials,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    links: [
      {
        to: 'https://www.youtube.com/@YourChannel',
        external: true,
        ariaLabel: 'YouTube',
        src: youtube,
        alt: 'YouTube',
      },
      {
        to: 'https://www.facebook.com/YourPage',
        external: true,
        ariaLabel: 'Facebook',
        src: facebook,
        alt: 'Facebook',
      },
      {
        to: 'https://wa.me/441234567890',
        external: true,
        ariaLabel: 'WhatsApp',
        src: whatsapp,
        alt: 'WhatsApp',
      },
    ],
  },
};
