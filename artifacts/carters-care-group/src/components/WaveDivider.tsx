interface WaveDividerProps {
  fill?: string;
  flip?: boolean;
  className?: string;
  height?: number;
}

export function WaveTop({ fill = "#fff", className = "" }: { fill?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden leading-none -mb-px ${className}`}>
      <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={fill} />
      </svg>
    </div>
  );
}

export function WaveBottom({ fill = "#fff", className = "" }: { fill?: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden leading-none -mt-px ${className}`}>
      <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
        <path d="M0,36 C240,0 480,72 720,36 C960,0 1200,72 1440,36 L1440,0 L0,0 Z" fill={fill} />
      </svg>
    </div>
  );
}

export default function WaveDivider({ fill = "#fff", flip = false, className = "", height = 72 }: WaveDividerProps) {
  return (
    <div className={`relative overflow-hidden leading-none ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ transform: flip ? "scaleY(-1)" : "none" }}
      >
        <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={fill} />
      </svg>
    </div>
  );
}
