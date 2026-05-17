const LineZero = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <div
        className="w-px h-20 rounded-full"
        style={{
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          opacity: 0.4,
        }}
      />
      <div
        className="w-3 h-3 rounded-full mt-2"
        style={{ background: 'var(--accent)', opacity: 0.4 }}
      />
      <div
        className="w-px h-20 rounded-full mt-2"
        style={{
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          opacity: 0.4,
        }}
      />
    </div>
  );
};

export default LineZero;