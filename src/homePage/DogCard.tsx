export type DogCardProps = {
  title: string;
  paragraph: string;
  imgSrc: string;
};

export function DogCard({ title, paragraph, imgSrc }: DogCardProps) {
  return (
    <div className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300">
      <img
        src={imgSrc}
        alt="Copertina card"
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
          Dog
        </span>

        <h2 className="mt-3 text-xl font-bold text-slate-800">{title}</h2>

        <p className="mt-2 text-sm text-slate-500 leading-relaxed">
          {paragraph}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Visualizza
          </button>
        </div>
      </div>
    </div>
  );
}
