const LineZero = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <div
        className="w-px h-24 rounded-full"
        style={{
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default LineZero;