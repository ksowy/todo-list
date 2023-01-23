import * as icons from "lucide-react";
import { createElement } from "react";

export const Icon = ({ icon, className, ...props }) => {
  if (icons[icon]) {
    return createElement(icons[icon], {
      ...props,
      className: `lucide ${className}`,
    });
  } else {
    throw icon;
  }
};
