export const Showcase: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center justify-center gap-4 rounded border border-slate-50 p-4 text-lg text-slate-100">
        <div>first</div>

        <button type="button" className="rounded border border-slate-50 p-2">
          Strongest
        </button>
      </div>
      <div className="p-4 text-slate-50">vs</div>
      <div className="flex flex-col items-center justify-center gap-4 rounded border border-slate-50 p-4 text-lg text-slate-100 ">
        <div>second</div>

        <button
          type="button"
          className="rounded border border-slate-50 p-2"
          onClick={() => ""}
        >
          Strongest
        </button>
      </div>
    </div>
  );
};
