type Props = { size?: number; bright?: boolean; className?: string };

export function NodeMark({ size = 80, bright = false, className }: Props) {
  const stroke = bright ? "#bbb" : "#777";
  const lines1: [string, string, string, string][] = [
    ["100", "22", "62", "40"], ["100", "22", "138", "40"],
    ["62", "40", "40", "74"], ["138", "40", "160", "74"],
    ["40", "74", "52", "108"], ["160", "74", "148", "108"],
    ["52", "108", "70", "138"], ["148", "108", "130", "138"],
    ["70", "138", "100", "148"], ["130", "138", "100", "148"],
  ];
  const lines2: [string, string, string, string][] = [
    ["62", "40", "84", "70"], ["138", "40", "116", "70"],
    ["40", "74", "84", "70"], ["160", "74", "116", "70"],
    ["52", "108", "100", "102"], ["148", "108", "100", "102"],
    ["70", "138", "100", "102"], ["130", "138", "100", "102"],
  ];
  const outerNodes: [string, string, string, string][] = [
    ["100", "22", "4", "na"], ["62", "40", "3", "nb"], ["138", "40", "3", "nb"],
    ["40", "74", "3", "nb"], ["160", "74", "3", "nb"],
    ["52", "108", "2.5", "nc"], ["148", "108", "2.5", "nc"],
    ["70", "138", "2.5", "nc"], ["130", "138", "2.5", "nc"], ["100", "148", "3", "nb"],
  ];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="30 10 140 150"
      width={size}
      height={size * 0.94}
      style={{ display: "block" }}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="na" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={bright ? "#e0e0e0" : "#bbb"} />
          <stop offset="100%" stopColor="#555" stopOpacity=".4" />
        </radialGradient>
        <radialGradient id="nb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={bright ? "#aaa" : "#888"} />
          <stop offset="100%" stopColor="#333" stopOpacity=".5" />
        </radialGradient>
        <radialGradient id="nc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#555" />
          <stop offset="100%" stopColor="#222" stopOpacity=".3" />
        </radialGradient>
        <linearGradient id="nl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#333" stopOpacity=".2" />
          <stop offset="50%" stopColor={bright ? "#bbb" : "#888"} stopOpacity=".9" />
          <stop offset="100%" stopColor="#333" stopOpacity=".2" />
        </linearGradient>
      </defs>
      {lines1.map(([x1, y1, x2, y2], i) => (
        <line key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#nl)" strokeWidth="1.2" />
      ))}
      {lines2.map(([x1, y1, x2, y2], i) => (
        <line key={`b${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth=".9" opacity=".55" />
      ))}
      <line x1="84" y1="70" x2="116" y2="70" stroke={bright ? "#aaa" : "#888"} strokeWidth="1.1" opacity=".8" />
      <line x1="84" y1="70" x2="100" y2="102" stroke={bright ? "#999" : "#777"} strokeWidth="1.1" opacity=".75" />
      <line x1="116" y1="70" x2="100" y2="102" stroke={bright ? "#999" : "#777"} strokeWidth="1.1" opacity=".75" />
      {outerNodes.map(([cx, cy, r, fill], i) => (
        <circle key={`n${i}`} cx={cx} cy={cy} r={r} fill={`url(#${fill})`} />
      ))}
      <circle cx="84" cy="70" r="4.5" fill="url(#na)" />
      <circle cx="116" cy="70" r="4.5" fill="url(#na)" />
      <circle cx="100" cy="102" r="7" fill="url(#na)" />
      <circle cx="100" cy="102" r="11" fill="none" stroke={stroke} strokeWidth=".7" opacity=".4" />
      <circle cx="100" cy="22" r="7.5" fill="none" stroke={stroke} strokeWidth=".7" opacity=".45" />
    </svg>
  );
}
