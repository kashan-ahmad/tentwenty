import Star, { StarProps } from "../../shapes/Star";

export default function LogoStar({ className = "", ...props }: StarProps) {
  return (
    <Star
      {...props}
      id="LogoStar"
      className={`scale-50 text-blue-600 absolute -top-10 -right-24 ${className}`}
    />
  );
}
