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
      className=" flex items-center gap-3 px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all hover:scale-105 border border-gray-700/50 group"
    >
      <div className=" p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
        <svg
          className=" w-5 h-5 text-cyan-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={path}></path>
        </svg>
      </div>
      <div>
        <p className=" font-semibold text-gray-200">{title}</p>
        <p className=" text-sm text-gray-400">{username}</p>
      </div>
    </a>
  );
}
