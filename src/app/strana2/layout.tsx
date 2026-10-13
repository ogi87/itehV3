export default function Strana2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 border-dashed border-amber-400 p-4 rounded-2xl bg-amber-50/40 my-4 shadow-sm">
      <p className="bg-amber-500 text-white font-bold text-center py-1.5 text-sm rounded-lg tracking-wide">
        Layout na stranici 2 (Ugnježdeni / Nested Layout)
      </p>

      {children}

      <p className="bg-amber-500 text-white font-bold text-center py-1.5 text-sm rounded-lg tracking-wide">
        Kraj Layout-a na stranici 2
      </p>
    </div>
  );
}
