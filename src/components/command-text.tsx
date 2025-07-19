type CommandTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function CommandText({ children, className }: CommandTextProps) {
  return <p className={`text-cyan-400 mb-4 ${className}`}>{children}</p>;
}
