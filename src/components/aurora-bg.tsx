export function AuroraBG() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-canvas" />
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[70vh] w-[70vw] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, #1b3a8a55 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 right-[-10%] h-[80vh] w-[55vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, #8a7bfd55 0%, transparent 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[50vh] w-[40vw] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, #38c0b555 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, #ffffff55 50%, transparent 51%), radial-gradient(1px 1px at 60% 70%, #ffffff55 50%, transparent 51%), radial-gradient(1px 1px at 80% 20%, #ffffff55 50%, transparent 51%)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
        }}
      />
    </div>
  );
}

