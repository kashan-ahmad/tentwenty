import logoSrc from "../assets/sassy-chat.png";

type Props = { text: string };

export default function Preflight({ text }: Props) {
  return (
    <svg
      width="900"
      height="200"
      viewBox="0 0 900 200"
      style={{ textAlign: "center" }}
      id="Preflight"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <text
          x="50%"
          y="50%"
          id="Text"
          fill="#2E2E30"
          xmlSpace="preserve"
          fontSize="128"
          fontWeight="600"
          letterSpacing="0em"
          textAnchor="middle"
          dominantBaseline="central"
          className="whitespace-pre opacity-0"
        >
          {text}
        </text>
        <rect
          id="Mask1"
          width="900"
          height="200"
          className="Mask"
          transform="matrix(-1 0 0 1 900 0)"
          fill="#454547"
        />
        <rect
          id="Mask2"
          width="900"
          height="200"
          className="Mask"
          transform="matrix(-1 0 0 1 900 0)"
          fill="#454547"
        />
      </g>
    </svg>
  );
}
