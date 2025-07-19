type SocialLinksProps = {
  title: string;
  username: string;
  href: string;
  path: string;
};

export default function SocialLinks({
  href,
  title,
  username,
  path,
}: SocialLinksProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 px-4 py-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 duration-300 transition-colors"
    >
      <div className="p-2 bg-cyan-500/30 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
        <svg
          className="w-5 h-5 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={path}></path>
        </svg>
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-sm font-light text-gray-300">{username}</p>
      </div>
    </a>
  );
}
