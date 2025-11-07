export function AuroraBG() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-canvas" />
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[70vh] w-[70vw] rounded-full opacity-60 blur-3xl aurora-blob aurora-blob--indigo"
      />
      <div
        className="pointer-events-none absolute -bottom-48 right-[-10%] h-[80vh] w-[55vw] rounded-full opacity-70 blur-3xl aurora-blob aurora-blob--violet"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-[50vh] w-[40vw] rounded-full opacity-70 blur-3xl aurora-blob aurora-blob--teal"
      />
      <div className="absolute inset-0 aurora-stars" />
    </div>
  );
}
