import LogoLoader from "@/components/Logo/LogoLoader";

type Props = { text: string };

export default function PreFlightContent({ text }: Props) {
  return (
    <div id="Preflight" className="relative">
      <LogoLoader
        id="Logo"
        className="z-0 opacity-0 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4"
      />
      <svg
        width="900"
        height="200"
        viewBox="0 0 900 200"
        className="relative text-center z-10 text-neutral-800"
        id="Container"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <text
            x="50%"
            y="50%"
            id="Text"
            transform="scale(.985)"
            fill="currentColor"
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
    </div>
  );
}
