export default function Sidebar() {
  return (
    <div className="space-y-8">
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
        <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Numbers</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-500">EXPOSED SERVERS:</span>
            <span className="text-orange-500 font-bold">175,000+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">PARAMS:</span>
            <span className="text-orange-500 font-bold">109B+</span>
          </div>
        </div>
      </div>
    </div>
  );
}