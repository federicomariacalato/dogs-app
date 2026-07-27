export type DogCardProps = {
  title: string;
  paragraph: string;
  imgSrc: string;
};

export function DogCard({ title, paragraph, imgSrc }: DogCardProps) {
  return (
    <div className="max-w-sm w-full bg-white/90 backdrop-blur rounded-2xl shadow-lg overflow-hidden border border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white bg-amber-500/90 px-2.5 py-1 rounded-full shadow">
          🐾 Cane
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-amber-950">{title}</h2>

        <p className="mt-2 text-sm text-amber-800/70 leading-relaxed">
          {paragraph}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-sm">
            Visualizza
          </button>
        </div>
      </div>
    </div>
  );
}