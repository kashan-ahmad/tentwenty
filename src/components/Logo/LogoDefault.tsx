import Logo from "./Logo";
import LogoStar from "./LogoStar";

export default function LogoDefault({
  textClassName = "text-white",
  ...props
}: Parameters<typeof Logo>[0]) {
  return (
    <Logo {...props}>
      <LogoStar />
    </Logo>
  );
}
