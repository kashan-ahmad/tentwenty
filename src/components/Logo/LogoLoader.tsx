import LogoStar from "./LogoStar";
import Logo, { LogoProps } from "./Logo";

export default function LogoLoader({
  textClassName = "text-white",
  ...props
}: LogoProps) {
  return (
    <Logo {...props} textClassName={textClassName}>
      <LogoStar className="LogoLoader" />
    </Logo>
  );
}
