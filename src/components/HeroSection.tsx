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
              {/* Outer Energy Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[5%] rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[10%] rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Radiating Electric Current Effects */}
              {[...Array(16)].map((_, i) => {
                const angle = (i * 22.5) * (Math.PI / 180);
                const length = 150 + Math.random() * 80;
                return (
                  <motion.div
                    key={`current-${i}`}
                    className="absolute top-1/2 left-1/2 origin-left"
                    style={{
                      width: `${length}px`,
                      height: '3px',
                      transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateX(100px)`,
                    }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary) / 0.6), transparent)`,
                        boxShadow: `0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)`,
                        transformOrigin: 'left',
                      }}
                      animate={{
                        scaleX: [0, 1, 0.8, 0],
                        opacity: [0, 1, 0.8, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.08,
                        repeat: Infinity,
                        repeatDelay: 0.3,
                      }}
                    />
                    {/* Electric spark at end */}
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2"
                      animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.08 + 0.2,
                        repeat: Infinity,
                        repeatDelay: 0.3,
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)),0_0_40px_hsl(var(--primary)),0_0_60px_hsl(var(--primary)/0.5)]" />
                    </motion.div>
                    {/* Branching lightning */}
                    {i % 2 === 0 && (
                      <motion.div
                        className="absolute right-8 top-1/2 w-12 h-0.5 bg-gradient-to-r from-primary/60 to-transparent rounded-full"
                        style={{ transform: 'rotate(30deg)' }}
                        animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.08 + 0.3,
                          repeat: Infinity,
                          repeatDelay: 0.7,
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Hexagonal Frame */}
              <svg className="absolute inset-[12%] w-[76%] h-[76%]" viewBox="0 0 100 100">
                <motion.polygon
                  points="50,2 93,25 93,75 50,98 7,75 7,25"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  strokeOpacity="0.4"
                  animate={{ strokeOpacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.polygon
                  points="50,8 87,28 87,72 50,92 13,72 13,28"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.8"
                  strokeOpacity="0.6"
                  animate={{ strokeOpacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
              </svg>

              {/* AI Chip Body */}
              <div className="absolute inset-[18%] rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary border-2 border-primary/50 shadow-[0_0_80px_hsl(var(--primary)/0.4),inset_0_0_40px_hsl(var(--primary)/0.15)]">
                {/* Chip Surface Pattern - Hexagonal Grid */}
                <div className="absolute inset-2 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 15V45L30 60L0 45V15z' fill='none' stroke='%2300ffd5' stroke-opacity='0.15'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }} />
                </div>

                {/* Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {/* Horizontal lines */}
                  {[20, 35, 50, 65, 80].map((y, i) => (
                    <motion.line
                      key={`h-${i}`}
                      x1="10" y1={y} x2="90" y2={y}
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.3"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0] }}
                      transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                    />
                  ))}
                  {/* Vertical lines */}
                  {[20, 35, 50, 65, 80].map((x, i) => (
                    <motion.line
                      key={`v-${i}`}
                      x1={x} y1="10" x2={x} y2="90"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.3"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0] }}
                      transition={{ duration: 3, delay: i * 0.2 + 0.5, repeat: Infinity }}
                    />
                  ))}
                  {/* Diagonal accents */}
                  <motion.path
                    d="M20,20 L40,40 M60,60 L80,80 M80,20 L60,40 M40,60 L20,80"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.4"
                    fill="none"
                    animate={{ strokeOpacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>

                {/* Corner Decorations */}
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner) => (
                  <div
                    key={corner}
                    className={`absolute w-8 h-8 border-primary/60 ${
                      corner === 'top-left' ? 'top-2 left-2 border-t-2 border-l-2 rounded-tl-lg' :
                      corner === 'top-right' ? 'top-2 right-2 border-t-2 border-r-2 rounded-tr-lg' :
                      corner === 'bottom-left' ? 'bottom-2 left-2 border-b-2 border-l-2 rounded-bl-lg' :
                      'bottom-2 right-2 border-b-2 border-r-2 rounded-br-lg'
                    }`}
                  />
                ))}

                {/* Central Core */}
                <div className="absolute inset-[22%] rounded-xl overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-primary/30"
                    animate={{
                      background: [
                        'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.3))',
                        'linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1))',
                        'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.3))',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-primary"
                    animate={{
                      boxShadow: [
                        'inset 0 0 20px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.4)',
                        'inset 0 0 40px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.6)',
                        'inset 0 0 20px hsl(var(--primary) / 0.3), 0 0 30px hsl(var(--primary) / 0.4)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* AI Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.span 
                        className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary/80 to-accent relative z-10"
                        style={{
                          textShadow: '0 0 40px hsl(var(--primary) / 0.8), 0 0 80px hsl(var(--primary) / 0.4)',
                          WebkitTextStroke: '1px hsl(var(--primary) / 0.5)',
                        }}
                        animate={{
                          textShadow: [
                            '0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3)',
                            '0 0 60px hsl(var(--primary) / 1), 0 0 120px hsl(var(--primary) / 0.6)',
                            '0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3)',
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        AI
                      </motion.span>
                      {/* Glitch effect */}
                      <motion.span
                        className="absolute inset-0 text-6xl font-black text-primary/30"
                        animate={{
                          x: [-2, 2, -2],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        AI
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Scanning line effect */}
                  <motion.div
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Chip Pins / Connectors */}
              {['top', 'bottom', 'left', 'right'].map((side) => {
                const isVertical = side === 'top' || side === 'bottom';
                const count = 10;
                return (
                  <div
                    key={side}
                    className={`absolute ${
                      side === 'top' ? 'top-[16%] left-[22%] right-[22%] h-5' :
                      side === 'bottom' ? 'bottom-[16%] left-[22%] right-[22%] h-5' :
                      side === 'left' ? 'left-[16%] top-[22%] bottom-[22%] w-5' :
                      'right-[16%] top-[22%] bottom-[22%] w-5'
                    } flex ${isVertical ? 'flex-row justify-around' : 'flex-col justify-around'}`}
                  >
                    {[...Array(count)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`${isVertical ? 'w-2 h-5' : 'w-5 h-2'} rounded-sm relative overflow-hidden`}
                        style={{
                          background: `linear-gradient(${
                            side === 'top' ? '180deg' : side === 'bottom' ? '0deg' : side === 'left' ? '90deg' : '270deg'
                          }, hsl(var(--primary) / 0.8), hsl(var(--primary) / 0.3))`,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-primary"
                          animate={{
                            opacity: [0.3, 1, 0.3],
                          }}
                          transition={{
                            duration: 0.8,
                            delay: i * 0.08,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                );
              })}

              {/* Floating Data Labels */}
              <motion.div 
                className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 glass-card rounded-lg text-xs text-primary border border-primary/30 font-mono"
                animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-accent">◆</span> Neural.Core.v3
              </motion.div>
              <motion.div 
                className="absolute -bottom-6 right-[5%] px-4 py-2 glass-card rounded-lg text-xs text-primary border border-primary/30 font-mono"
                animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <span className="text-accent">◆</span> DataSync.Active
              </motion.div>
              <motion.div 
                className="absolute top-1/2 -right-12 px-3 py-1 glass-card rounded-lg text-xs text-accent border border-accent/30 font-mono"
                animate={{ x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-primary">●</span> Quantum.Link
              </motion.div>
              <motion.div 
                className="absolute top-1/3 -left-10 px-3 py-1 glass-card rounded-lg text-xs text-primary border border-primary/30 font-mono"
                animate={{ x: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                <span className="text-accent">▲</span> AI.Matrix
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
