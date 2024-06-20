import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    href?: never
};
type Anchorprops = ComponentPropsWithoutRef<"a"> & {
    href?: string;
};

function isAnchorProps(props: ButtonProps | Anchorprops): props is Anchorprops{
    return 'href' in props
}

function Button(props: ButtonProps | Anchorprops) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
export default Button;
