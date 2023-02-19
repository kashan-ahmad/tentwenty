import Logo from "./Logo";
import LogoStar from "./LogoStar";

export default function LogoLoader({
  textClassName = "text-white",
  ...props
}: Parameters<typeof Logo>[0]) {
  return (
    <Logo {...props}>
      <LogoStar className="LogoLoader" />
    </Logo>
  );
}
