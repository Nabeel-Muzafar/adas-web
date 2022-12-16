import * as React from "react";
import { IoCalendar, IoGrid, IoHelpBuoy } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

export const Links = [
  {
    label: "Products",
    children: [
      {
        label: "Get Help",
        description: "Read our documentation and FAQs, or get in touch.",
        href: "#",
        icon: <IoHelpBuoy />,
        id: "1",
      },
      {
        label: "Events & Meetups",
        description: "Discover and join your local Sketch community.",
        href: "#",
        icon: <IoCalendar />,
        id: "2",
      },
      {
        label: "Extensions",
        description: "Do even more with Assistants, plugins and integrations.",
        href: "#",
        icon: <IoGrid />,
        id: "3",
      },
      {
        label: "Blog",
        description: "Get updates, articles and insights from the team.",
        href: "#",
        icon: <MdWeb />,
        id: "4",
      },
    ],
  },
  {
    label: "Shop",
    href: "/shop",
  },
];
