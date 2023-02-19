import Star from "../../shapes/Star";

export default function LogoStar({
  className = "",
  ...props
}: Parameters<typeof Star>[0]) {
  return (
    <Star
      {...props}
      id="LogoStar"
      className={`scale-50 text-blue-600 absolute -top-10 -right-24 ${className}`}
    />
  );
}
