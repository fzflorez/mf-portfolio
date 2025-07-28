import CommandText from "./command-text";
import SkillTag from "./skill-tag";
import TerminalControls from "./terminal-controls";

export default function HeroTerminal() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-full max-w-7xl p-4">
          <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-lg rounded-lg p-2 border border-cyan-900/40">
            <img src="/logo-mf.png" alt="Logo MF" loading="lazy" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-pattern-3 bg-size bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      <div className="relative z-10 max-w-4xl w-full mx-4">
        <div
          className="bg-black/50 backdrop-blur-lg rounded-lg p-6 border-2 border-cyan-900/40"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <TerminalControls />
          <div className="font-cascadia">
            <CommandText>$ whoami</CommandText>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-1">
              Mauricio Florez
            </h1>
            <p className="text-gray-300 mb-4">Frontend Developer</p>
            <CommandText>$ skills</CommandText>
            <div className="flex flex-wrap gap-3 mt-2">
              <SkillTag texto="JavaScript" />
              <SkillTag texto="React" />
              <SkillTag texto="TypeScript" />
              <SkillTag texto="Tailwind CSS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
