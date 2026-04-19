type Props = { width?: number; inverted?: boolean; className?: string };

export function LogoFull({ width = 520, inverted = false, className }: Props) {
  const divider = inverted ? "#ccc" : "#1e1e1e";
  const tag = inverted ? "#bbb" : "#2e2e2e";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 580 170"
      width={width}
      height={width * 170 / 580}
      style={{ display: "block" }}
      className={className}
      aria-label="Synapses Group"
    >
      <defs>
        <radialGradient id="fa" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={inverted ? "#222" : "#d0d0d0"} />
          <stop offset="100%" stopColor="#777" stopOpacity=".4" />
        </radialGradient>
        <radialGradient id="fb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={inverted ? "#555" : "#999"} />
          <stop offset="100%" stopColor="#444" stopOpacity=".5" />
        </radialGradient>
        <radialGradient id="fc" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#666" />
          <stop offset="100%" stopColor="#333" stopOpacity=".3" />
        </radialGradient>
        <linearGradient id="fl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#444" stopOpacity=".2" />
          <stop offset="50%" stopColor={inverted ? "#444" : "#999"} stopOpacity=".9" />
          <stop offset="100%" stopColor="#444" stopOpacity=".2" />
        </linearGradient>
        <linearGradient id="ft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={inverted ? "#555" : "#888"} />
          <stop offset="40%" stopColor={inverted ? "#111" : "#e8e8e8"} />
          <stop offset="100%" stopColor={inverted ? "#555" : "#777"} />
        </linearGradient>
        <linearGradient id="fs" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={inverted ? "#bbb" : "#333"} />
          <stop offset="50%" stopColor={inverted ? "#555" : "#666"} />
          <stop offset="100%" stopColor={inverted ? "#bbb" : "#333"} />
        </linearGradient>
      </defs>
      {[
        ["100", "22", "62", "40"], ["100", "22", "138", "40"],
        ["62", "40", "40", "74"], ["138", "40", "160", "74"],
        ["40", "74", "52", "108"], ["160", "74", "148", "108"],
        ["52", "108", "70", "138"], ["148", "108", "130", "138"],
        ["70", "138", "100", "148"], ["130", "138", "100", "148"],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="url(#fl)" strokeWidth="1.1" />
      ))}
      {[
        ["62", "40", "84", "70"], ["138", "40", "116", "70"],
        ["40", "74", "84", "70"], ["160", "74", "116", "70"],
        ["52", "108", "100", "102"], ["148", "108", "100", "102"],
        ["70", "138", "100", "102"], ["130", "138", "100", "102"],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={`b${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#777" strokeWidth=".9" opacity=".55" />
      ))}
      <line x1="84" y1="70" x2="116" y2="70" stroke="#999" strokeWidth="1" opacity=".75" />
      <line x1="84" y1="70" x2="100" y2="102" stroke="#888" strokeWidth="1" opacity=".7" />
      <line x1="116" y1="70" x2="100" y2="102" stroke="#888" strokeWidth="1" opacity=".7" />
      {[
        ["100", "22", "4", "fa"], ["62", "40", "3", "fb"], ["138", "40", "3", "fb"],
        ["40", "74", "3", "fb"], ["160", "74", "3", "fb"],
        ["52", "108", "2.5", "fc"], ["148", "108", "2.5", "fc"],
        ["70", "138", "2.5", "fc"], ["130", "138", "2.5", "fc"], ["100", "148", "3", "fb"],
      ].map(([cx, cy, r, f], i) => (
        <circle key={`n${i}`} cx={cx} cy={cy} r={r} fill={`url(#${f})`} />
      ))}
      <circle cx="84" cy="70" r="4.5" fill="url(#fa)" />
      <circle cx="116" cy="70" r="4.5" fill="url(#fa)" />
      <circle cx="100" cy="102" r="6.5" fill="url(#fa)" />
      <circle cx="100" cy="102" r="10" fill="none" stroke="#888" strokeWidth=".7" opacity=".4" />
      <circle cx="100" cy="22" r="7" fill="none" stroke="#999" strokeWidth=".7" opacity=".45" />
      <line x1="182" y1="22" x2="182" y2="150" stroke={divider} strokeWidth="1" />
      <text x="200" y="92" fontFamily="Rajdhani,sans-serif" fontSize="50" fontWeight="600" letterSpacing="9" fill="url(#ft)">SYNAPSES</text>
      <line x1="200" y1="102" x2="558" y2="102" stroke={divider} strokeWidth=".8" />
      <text x="202" y="122" fontFamily="Rajdhani,sans-serif" fontSize="15" fontWeight="500" letterSpacing="12" fill="url(#fs)">GROUP</text>
      <text x="202" y="146" fontFamily="Courier New,monospace" fontSize="8" letterSpacing="3" fill={tag}>AUTONOMOUS INTELLIGENCE · EST. 2025</text>
    </svg>
  );
}
