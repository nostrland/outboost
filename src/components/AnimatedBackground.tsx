export default function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1400px_800px_at_50%_-10%,rgba(255,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_600px_at_10%_90%,rgba(255,255,255,0.06),transparent_65%)]" />
      
      {/* Animated orbs - simplified on mobile, full on desktop */}
      {/* Mobile: static orbs without animation and less blur */}
      <div className="md:hidden">
        <div className="absolute h-[500px] w-[500px] -top-32 -left-32 rounded-full blur-[80px] opacity-30 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.20),rgba(255,255,255,0.05)_50%,transparent_70%)]" />
        <div className="absolute h-[450px] w-[450px] top-1/3 -right-20 rounded-full blur-[70px] opacity-25 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_50%,transparent_70%)]" />
      </div>
      
      {/* Desktop: full animated orbs */}
      <div className="hidden md:block">
        <div className="absolute h-[800px] w-[800px] -top-32 -left-32 rounded-full blur-[120px] opacity-40 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.25),rgba(255,255,255,0.08)_50%,transparent_70%)] animate-[orb1_20s_ease-in-out_infinite]" />
        <div className="absolute h-[700px] w-[700px] top-1/4 -right-40 rounded-full blur-[100px] opacity-35 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.22),rgba(255,255,255,0.06)_50%,transparent_70%)] animate-[orb2_25s_ease-in-out_infinite]" />
        <div className="absolute h-[600px] w-[600px] bottom-1/4 left-1/4 rounded-full blur-[90px] opacity-30 bg-[radial-gradient(circle_at_60%_35%,rgba(255,255,255,0.20),rgba(255,255,255,0.05)_50%,transparent_70%)] animate-[orb3_30s_ease-in-out_infinite]" />
        <div className="absolute h-[650px] w-[650px] top-1/2 right-1/3 rounded-full blur-[110px] opacity-25 bg-[radial-gradient(circle_at_35%_60%,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_50%,transparent_70%)] animate-[orb4_22s_ease-in-out_infinite]" />
      </div>

      {/* Keyframes for smooth, organic movement */}
      <style>
        {`
          @keyframes orb1 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            25% { 
              transform: translate(60px, -40px) scale(1.1);
            }
            50% { 
              transform: translate(30px, -80px) scale(0.95);
            }
            75% { 
              transform: translate(-20px, -50px) scale(1.05);
            }
          }
          @keyframes orb2 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            33% { 
              transform: translate(-50px, 60px) scale(1.08);
            }
            66% { 
              transform: translate(-80px, 20px) scale(0.92);
            }
          }
          @keyframes orb3 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            25% { 
              transform: translate(70px, 50px) scale(1.12);
            }
            50% { 
              transform: translate(40px, 90px) scale(0.88);
            }
            75% { 
              transform: translate(-30px, 60px) scale(1.06);
            }
          }
          @keyframes orb4 {
            0%, 100% { 
              transform: translate(0, 0) scale(1);
            }
            30% { 
              transform: translate(-60px, -70px) scale(1.15);
            }
            60% { 
              transform: translate(-90px, -30px) scale(0.90);
            }
          }
        `}
      </style>
    </div>
  );
}