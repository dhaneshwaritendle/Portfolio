interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-violet-400 bg-violet-400/10 px-3 py-1 rounded-full mb-4">
      {text}
    </span>
  );
}
