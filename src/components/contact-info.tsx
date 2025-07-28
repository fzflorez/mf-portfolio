import { toast } from "react-toastify";
import CommandText from "./command-text";
import SocialLinks from "./social-links";
import TerminalControls from "./terminal-controls";

export default function ContactInfo() {
  return (
    <div className="max-w-4xl mx-auto" data-aos="fade-left">
      <div className="relative p-8 rounded-2xl overflow-hidden bg-black/50 backdrop-blur-lg border-2 border-cyan-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cyan-500/20"></div>
        <div className="relative z-10">
          <TerminalControls />
          <div className="font-cascadia">
            <CommandText>$ contact --info</CommandText>
            <h2 className="text-3xl font-bold mb-8 text-gray-200">
              Let's Connect
            </h2>
            <CommandText className="mt-8">$ contact --email</CommandText>
            <div className="flex flex-col gap-4 text-white sm:flex-row md:items-center">
              <a
                href="mailto:fzflorez02@gmail.com"
                className="w-fit gap-2 px-6 py-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 duration-300 transition-colors"
              >
                fzflorez02@gmail.com
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("fzflorez02@gmail.com");
                  toast.success("Correo copiado", { autoClose: 2000 });
                }}
                className="w-fit p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors duration-300"
                aria-label="Copiar correo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75H18a2.25 2.25 
                      0 012.25 2.25v13.5A2.25 
                      2.25 0 0118 21.75H6a2.25 
                      2.25 0 01-2.25-2.25V6A2.25 
                      2.25 0 016 3.75h1.5m3.75 
                      0h3M9.75 3.75a.75.75 0 
                      00-.75.75v1.5c0 
                      .414.336.75.75.75h4.5a.75.75 
                      0 00.75-.75V4.5a.75.75 
                      0 00-.75-.75"
                  />
                </svg>
              </button>
            </div>
            <CommandText className="mt-8">$ resume.pdf</CommandText>
            <a
              href="/docs/Mauricio-Florez_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20 hover:bg-cyan-500/20 duration-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 16l4-5h-3V4h-2v7H8l4 5zM5 18h14v2H5v-2z"></path>
              </svg>
              <span>Download Resume</span>
            </a>
            <CommandText className="mt-8">$ ls ./social-links</CommandText>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SocialLinks
                href="https://github.com/fzflorez"
                title="GitHub"
                username="@fzflorez"
                path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
              <SocialLinks
                title="LinkedIn"
                username="Mauricio Florez"
                href="https://www.linkedin.com/in/fzflorez/"
                path="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
