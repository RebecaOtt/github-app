export function Sppiner() {
  return (
    <div
      className="inline-flex flex-col items-center gap-6"
        role="status"
    >

      <div className="h-10 w-10 animate-spin
          rounded-full border-4 border-solid
          border-white border-r-transparent
          bg-blue-600">
      </div>
      <span
        className="text-center text-black text-sm  font-bold"
      >
        Carregando...
      </span>
    </div>
  );
}
