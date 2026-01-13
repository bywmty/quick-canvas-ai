import { motion } from "framer-motion";

const HeroSection = () => {
  // Generate circuit paths for the chip
  const circuitPaths = [
    { x1: 50, y1: 30, x2: 90, y2: 30 },
    { x1: 50, y1: 50, x2: 100, y2: 50 },
    { x1: 50, y1: 70, x2: 85, y2: 70 },
    { x1: 30, y1: 50, x2: 0, y2: 50 },
    { x1: 30, y1: 30, x2: 10, y2: 30 },
    { x1: 30, y1: 70, x2: 15, y2: 70 },
    { x1: 40, y1: 20, x2: 40, y2: 0 },
    { x1: 60, y1: 20, x2: 60, y2: 5 },
    { x1: 40, y1: 80, x2: 40, y2: 100 },
    { x1: 60, y1: 80, x2: 60, y2: 95 },
  ];

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
              <span className="text-foreground">Enterprise</span>
              <br />
              <span className="text-gradient-primary glow-text-primary">AI-Native OS</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-3 font-medium">
              企业级·原生AI操作系统
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-lg leading-relaxed">
              AI 2.0 时代的智能基建+业务交付的"数字员工"载体
            </p>

            <motion.button
              className="btn-demo group text-xl px-10 py-5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">DEMO</span>
            </motion.button>
          </motion.div>

          {/* Right Visual - AI Chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[500px] h-[500px]">
              {/* Radiating Electric Current Effects */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180);
                const length = 180 + Math.random() * 60;
                return (
                  <motion.div
                    key={`current-${i}`}
                    className="absolute top-1/2 left-1/2 origin-left"
                    style={{
                      width: `${length}px`,
                      height: '2px',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateX(80px)`,
                    }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full"
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                      style={{ transformOrigin: 'left' }}
                    />
                    {/* Electric spark at end */}
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_hsl(var(--primary)),0_0_30px_hsl(var(--primary)/0.5)]"
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1 + 0.3,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  </motion.div>
                );
              })}

              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-[15%] rounded-3xl border border-primary/30"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* AI Chip Body */}
              <div className="absolute inset-[20%] rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary border-2 border-primary/40 shadow-[0_0_60px_hsl(var(--primary)/0.3),inset_0_0_30px_hsl(var(--primary)/0.1)]">
                {/* Chip Surface Pattern */}
                <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `
                      linear-gradient(hsl(var(--primary) / 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--primary) / 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Circuit Traces on Chip */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {circuitPaths.map((path, i) => (
                    <motion.line
                      key={i}
                      x1={path.x1}
                      y1={path.y1}
                      x2={path.x2}
                      y2={path.y2}
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.3 }}
                      animate={{ pathLength: 1, opacity: [0.3, 0.8, 0.3] }}
                      transition={{
                        pathLength: { duration: 2, repeat: Infinity },
                        opacity: { duration: 1.5, repeat: Infinity, delay: i * 0.1 }
                      }}
                    />
                  ))}
                </svg>

                {/* Central Core */}
                <div className="absolute inset-[25%] rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/50 flex items-center justify-center">
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.span 
                    className="text-5xl font-bold text-gradient-primary relative z-10"
                    animate={{ 
                      textShadow: [
                        '0 0 20px hsl(var(--primary) / 0.5)',
                        '0 0 40px hsl(var(--primary) / 0.8)',
                        '0 0 20px hsl(var(--primary) / 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    趣云
                  </motion.span>
                </div>
              </div>

              {/* Chip Pins / Connectors */}
              {['top', 'bottom', 'left', 'right'].map((side) => {
                const isVertical = side === 'top' || side === 'bottom';
                const count = 8;
                return (
                  <div
                    key={side}
                    className={`absolute ${
                      side === 'top' ? 'top-[18%] left-[25%] right-[25%] h-4' :
                      side === 'bottom' ? 'bottom-[18%] left-[25%] right-[25%] h-4' :
                      side === 'left' ? 'left-[18%] top-[25%] bottom-[25%] w-4' :
                      'right-[18%] top-[25%] bottom-[25%] w-4'
                    } flex ${isVertical ? 'flex-row justify-around' : 'flex-col justify-around'}`}
                  >
                    {[...Array(count)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`${isVertical ? 'w-1.5 h-4' : 'w-4 h-1.5'} bg-gradient-to-${
                          side === 'top' ? 't' : side === 'bottom' ? 'b' : side === 'left' ? 'l' : 'r'
                        } from-primary/60 to-primary/20 rounded-sm`}
                        animate={{
                          opacity: [0.4, 1, 0.4],
                          boxShadow: [
                            '0 0 5px hsl(var(--primary) / 0.3)',
                            '0 0 15px hsl(var(--primary) / 0.6)',
                            '0 0 5px hsl(var(--primary) / 0.3)'
                          ]
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                );
              })}

              {/* Floating Data Labels */}
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 glass-card rounded-lg text-xs text-primary border border-primary/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SpeedxIdx-3xoT
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 right-[10%] px-4 py-2 glass-card rounded-lg text-xs text-primary border border-primary/30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                AI.dataSync
              </motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 px-3 py-1 glass-card rounded-lg text-xs text-accent border border-accent/30"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                Neural Core
              </motion.div>
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
