type TagsProps = {
  texto: string;
};

export default function SkillTag({ texto }: TagsProps) {
  return (
    <span className="px-3 py-1 bg-cyan-500/10 rounded-md border border-cyan-500/20">
      {texto}
    </span>
  );
}
