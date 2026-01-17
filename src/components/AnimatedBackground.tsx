export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_600px_at_50%_-5%,rgba(0,212,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_800px_500px_at_100%_100%,rgba(0,212,255,0.04),transparent_50%)]" />
      
      {/* Mobile: simple orbs without blur for performance */}
      <div className="md:hidden">
        <div className="absolute h-[350px] w-[350px] -top-40 -left-20 rounded-full opacity-20 bg-[radial-gradient(circle_at_40%_40%,rgba(0,212,255,0.12),transparent_60%)]" />
        <div className="absolute h-[300px] w-[300px] bottom-1/4 -right-20 rounded-full opacity-12 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.10),transparent_60%)]" />
      </div>
      
      {/* Desktop: subtle blur, no animation */}
      <div className="hidden md:block">
        <div className="absolute h-[500px] w-[500px] -top-32 -left-20 rounded-full blur-[60px] opacity-20 bg-[radial-gradient(circle_at_40%_40%,rgba(0,212,255,0.15),transparent_60%)]" />
        <div className="absolute h-[450px] w-[450px] top-1/3 -right-32 rounded-full blur-[50px] opacity-15 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.12),transparent_60%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_20%,transparent_70%)]" />
    </div>
  );
}
