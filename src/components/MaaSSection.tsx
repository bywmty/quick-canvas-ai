import { motion } from "framer-motion";
import { Database, Network, Brain, Zap, Factory } from "lucide-react";

const MaaSSection = () => {
  // Generate random particles for data flow
  const generateParticles = (count: number, direction: 'up' | 'down', color: 'primary' | 'accent') => {
    return [...Array(count)].map((_, i) => ({
      id: `${direction}-${i}`,
      delay: i * 0.3,
      x: 20 + Math.random() * 60, // Random X position between 20% and 80%
      color,
    }));
  };

  const upwardParticles = generateParticles(8, 'up', 'primary');
  const downwardParticles = generateParticles(6, 'down', 'accent');

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider mb-4 mt-4">
            AI 2.0 时代的智能基建
          </p>
          <h2 className="section-title text-foreground">
            MaaS <span className="text-gradient-primary">五层架构</span>
          </h2>
        </motion.div>

        {/* 5-Layer Architecture */}
        <div className="max-w-5xl mx-auto relative" style={{ minHeight: '800px' }}>
          
          {/* Particle Flow Container */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Upward flowing particles (bottom to center) */}
            {upwardParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)),0_0_16px_hsl(var(--primary)/0.6)]"
                style={{ left: `${particle.x}%` }}
                initial={{ bottom: '5%', opacity: 0, scale: 0 }}
                animate={{
                  bottom: ['5%', '45%'],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1.2, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            
            {/* Upward flowing particles (center to top) */}
            {downwardParticles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent)),0_0_16px_hsl(var(--accent)/0.6)]"
                style={{ left: `${particle.x}%` }}
                initial={{ bottom: '50%', opacity: 0, scale: 0 }}
                animate={{
                  bottom: ['50%', '92%'],
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1.2, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: particle.delay + 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Energy lines connecting layers */}
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              {/* Bottom to center lines */}
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={`line-up-${i}`}
                  x1={`${20 + i * 15}%`}
                  y1="95%"
                  x2="50%"
                  y2="50%"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
                />
              ))}
              {/* Center to top lines */}
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={`line-down-${i}`}
                  x1="50%"
                  y1="50%"
                  x2={`${20 + i * 15}%`}
                  y2="8%"
                  stroke="hsl(var(--accent))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 3, delay: i * 0.2 + 1.5, repeat: Infinity }}
                />
              ))}
            </svg>
          </div>

          {/* Layer Cards */}
          <div className="relative space-y-6" style={{ zIndex: 2 }}>
            
            {/* Level 5 - Smart Factory (Top) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[65%] feature-card group cursor-pointer border-accent/40 bg-gradient-to-r from-accent/10 via-card to-accent/10 hover:border-accent/60 hover:shadow-[0_0_30px_hsl(var(--accent)/0.2)]">
                <div className="flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Factory className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-accent/20 text-accent font-mono font-bold">L5</span>
                      <h3 className="font-semibold text-foreground text-lg">
                        Quick Agent Factory
                        <span className="text-accent ml-2">(智能工场)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于MCP的数字员工生产线</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 4 - Decision Brain */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[72%] feature-card group cursor-pointer border-primary/30 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]">
                <div className="flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Brain className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono font-bold">L4</span>
                      <h3 className="font-semibold text-foreground text-lg">
                        Quick Mind
                        <span className="text-primary ml-2">(决策大脑)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于"混合智能"的认知中枢</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 3 - Quick Context (CORE CENTER - Special Treatment) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center py-8"
            >
              <div className="w-[90%] relative">
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-xl"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Rotating border effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{ 
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main card */}
                <div className="relative glass-card rounded-2xl p-8 border-2 border-primary/50 bg-gradient-to-br from-primary/10 via-card to-accent/10">
                  {/* Particle effects inside card */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={`inner-particle-${i}`}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          backgroundColor: i % 2 === 0 ? 'hsl(var(--primary))' : 'hsl(var(--accent))',
                        }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                          x: [0, (Math.random() - 0.5) * 50],
                          y: [0, (Math.random() - 0.5) * 50],
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          delay: Math.random() * 2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>

                  <div className="relative flex items-center justify-center gap-6">
                    {/* Left data input indicator */}
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-12 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-10 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-8 h-1 bg-gradient-to-r from-transparent to-primary rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>

                    {/* Central core */}
                    <motion.div
                      className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center border-2 border-primary/60"
                      animate={{ 
                        boxShadow: [
                          '0 0 20px hsl(var(--primary)/0.3), 0 0 40px hsl(var(--accent)/0.2)',
                          '0 0 40px hsl(var(--primary)/0.5), 0 0 60px hsl(var(--accent)/0.3)',
                          '0 0 20px hsl(var(--primary)/0.3), 0 0 40px hsl(var(--accent)/0.2)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Orbiting particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={`orbit-${i}`}
                          className="absolute w-2 h-2 rounded-full bg-accent"
                          style={{
                            boxShadow: '0 0 6px hsl(var(--accent))',
                          }}
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          initial={{
                            x: Math.cos((i * 60 * Math.PI) / 180) * 40,
                            y: Math.sin((i * 60 * Math.PI) / 180) * 40,
                          }}
                        />
                      ))}
                      
                      <div className="w-16 h-16 rounded-full bg-card/80 flex items-center justify-center border border-primary/40">
                        <Zap className="w-8 h-8 text-primary" />
                      </div>
                    </motion.div>

                    {/* Center text */}
                    <div className="text-center flex-1">
                      <div className="flex items-center gap-3 justify-center mb-2">
                        <motion.span 
                          className="px-3 py-1 rounded-lg text-sm bg-gradient-to-r from-primary/30 to-accent/30 text-primary font-mono font-bold border border-primary/40"
                          animate={{ 
                            boxShadow: [
                              '0 0 10px hsl(var(--primary)/0.2)',
                              '0 0 20px hsl(var(--primary)/0.4)',
                              '0 0 10px hsl(var(--primary)/0.2)',
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          L3 · CORE
                        </motion.span>
                      </div>
                      <h3 className="font-bold text-2xl text-foreground mb-1">
                        Quick Context
                      </h3>
                      <p className="text-xl text-gradient-primary font-semibold mb-2">灵动快境</p>
                      <p className="text-sm text-muted-foreground">从"人本体验"到"自动语境"的代际跨越</p>
                    </div>

                    {/* Right data output indicator */}
                    <div className="flex flex-col items-center gap-2">
                      <motion.div
                        className="w-8 h-1 bg-gradient-to-l from-transparent to-accent rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-10 h-1 bg-gradient-to-l from-transparent to-accent rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-12 h-1 bg-gradient-to-l from-transparent to-accent rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Level 2 - Quick Fabric */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[72%] feature-card group cursor-pointer border-primary/30 hover:border-primary/50 hover:shadow-[0_0_25px_hsl(var(--primary)/0.15)]">
                <div className="flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Network className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono font-bold">L2</span>
                      <h3 className="font-semibold text-foreground text-lg">
                        Quick Fabric
                        <span className="text-primary ml-2">(资源织网)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">零侵入的异构资源织网能力</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 1 - Quick AI Data (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[65%] feature-card group cursor-pointer border-primary/40 bg-gradient-to-r from-primary/15 via-card to-primary/15 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                <div className="flex items-center gap-4 p-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Database className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono font-bold">L1</span>
                      <h3 className="font-semibold text-foreground text-lg">
                        Quick AI Data
                        <span className="text-primary ml-2">(全域记忆)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于开放标准的跨域逻辑湖仓</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MaaSSection;
