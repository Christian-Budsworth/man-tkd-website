import { Icon } from "./Icon";
import facebook from "../../../images/socials/facebook.svg";
import youtube from "../../../images/socials/youtube.png";
import whatsapp from "../../../images/socials/whatsapp.svg";
/* Adjust the list below to match the files you actually have in /public/images */

export default {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    shape: {
      control: { type: "inline-radio" },
      options: ["square", "rectangle"],
    },
    alt: { control: "text" },
  },
};

/* ── Interactive playground ─────────────────────────── */
export const FacebookIcon = {
  args: {
    src: facebook,
    size: "md",
    shape: "square",
    alt: "Facebook logo",
  },
};

/* ── Preset examples ─────────────────────────────────── */
export const YoutubeIcon = {
  args: { src: youtube, size: "sm", shape: "square", alt: "YouTube icon" },
};

export const whatsappIcon = {
  args: { src: whatsapp, size: "lg", shape: "square", alt: "Whatsapp icon" },
};
