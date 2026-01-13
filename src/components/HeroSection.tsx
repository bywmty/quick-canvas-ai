import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05)_0%,transparent_60%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-primary/60 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-accent animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              <span className="text-foreground">Enterprise</span>
              <br />
              <span className="text-gradient-primary">AI-Native OS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              企业级·原生AI操作系统
            </p>
            <p className="text-base text-muted-foreground/80 mb-8 max-w-md">
              AI 2.0 时代的智能基建+业务交付的"数字员工"载体
            </p>

            <motion.button
              className="btn-demo group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">DEMO</span>
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 animate-pulse-glow" />
              </div>
              
              {/* Rotating Ring 1 */}
              <div className="absolute inset-8 rounded-full border border-primary/20 animate-spin-slow" />
              
              {/* Rotating Ring 2 */}
              <div className="absolute inset-16 rounded-full border border-primary/40 animate-spin-reverse" />
              
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/50 flex items-center justify-center glow-primary">
                  <span className="text-4xl font-bold text-gradient-primary">IA</span>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-2 glass-card rounded-lg text-xs text-muted-foreground animate-float">
                SpeedxIdx-3xoT
              </div>
              <div className="absolute bottom-16 right-0 px-4 py-2 glass-card rounded-lg text-xs text-muted-foreground animate-float" style={{ animationDelay: "2s" }}>
                AI.dataSync
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
