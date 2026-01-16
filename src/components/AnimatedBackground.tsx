export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Simple static gradients only - no animations for performance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1400px_800px_at_50%_-10%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_600px_at_10%_90%,rgba(255,255,255,0.06),transparent_65%)]" />
      
      {/* Static orbs - no blur on mobile for speed */}
      <div className="md:hidden">
        <div className="absolute h-[400px] w-[400px] -top-32 -left-32 rounded-full opacity-20 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.15),transparent_70%)]" />
        <div className="absolute h-[350px] w-[350px] top-1/3 -right-20 rounded-full opacity-15 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]" />
      </div>
      
      {/* Desktop: subtle blur, no animation for speed */}
      <div className="hidden md:block">
        <div className="absolute h-[600px] w-[600px] -top-32 -left-32 rounded-full blur-[80px] opacity-25 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.20),rgba(255,255,255,0.05)_50%,transparent_70%)]" />
        <div className="absolute h-[550px] w-[550px] top-1/4 -right-40 rounded-full blur-[70px] opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_50%,transparent_70%)]" />
      </div>

    </div>
  );
}