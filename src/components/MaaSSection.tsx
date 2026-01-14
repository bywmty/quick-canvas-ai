import { motion } from "framer-motion";
import { Database, Network, Brain, Zap, Factory } from "lucide-react";

const layers = [
  {
    level: 5,
    icon: Factory,
    title: "Quick Agent Factory",
    subtitle: "智能工场",
    description: "基于MCP的数字员工生产线",
    color: "accent",
    position: "top",
  },
  {
    level: 4,
    icon: Brain,
    title: "Quick Mind",
    subtitle: "决策大脑",
    description: "基于\"混合智能\"的认知中枢",
    color: "primary",
    position: "upper",
  },
  {
    level: 3,
    icon: null,
    title: "数据融合层",
    subtitle: "Integration Hub",
    description: "整合底层数据与资源，向上传递决策信息",
    color: "muted",
    position: "middle",
  },
  {
    level: 2,
    icon: Zap,
    title: "Quick Context",
    subtitle: "灵动快境",
    description: "从\"人本体验\"到\"自动语境\"的代际跨越",
    color: "primary",
    position: "lower",
  },
  {
    level: 1,
    icon: Network,
    title: "Quick Fabric",
    subtitle: "资源织网",
    description: "零侵入的异构资源网",
    color: "primary",
    position: "lower",
  },
  {
    level: 0,
    icon: Database,
    title: "Quick AI Data",
    subtitle: "全域记忆",
    description: "基于开放标准的写探习逻辑湖仓",
    color: "primary",
    position: "bottom",
  },
];

const MaaSSection = () => {
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-wider mb-4">
            AI 2.0 时代的智能基建+业务交付的"数字员工"
          </p>
          <h2 className="section-title text-foreground">
            MaaS <span className="text-gradient-primary">智能基建架构</span>
          </h2>
        </motion.div>

        {/* 5-Layer Architecture */}
        <div className="max-w-4xl mx-auto relative">
          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Upward flow from bottom layers to middle */}
            <motion.path
              d="M 200 680 Q 200 500 400 420"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M 600 680 Q 600 500 400 420"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
              viewport={{ once: true }}
            />
            {/* Upward flow from middle to top layers */}
            <motion.path
              d="M 400 380 Q 300 280 250 180"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              viewport={{ once: true }}
            />
            <motion.path
              d="M 400 380 Q 500 280 550 180"
              stroke="hsl(var(--accent))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1.3, repeat: Infinity }}
              viewport={{ once: true }}
            />
          </svg>

          {/* Flowing Particles */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
            {/* Bottom to Middle particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`up-${i}`}
                className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)),0_0_20px_hsl(var(--primary)/0.5)]"
                style={{ left: `${25 + (i % 2) * 50}%` }}
                initial={{ bottom: '10%', opacity: 0 }}
                animate={{
                  bottom: ['10%', '50%'],
                  left: ['25%', '50%'],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Middle to Top particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`top-${i}`}
                className="absolute w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)),0_0_20px_hsl(var(--accent)/0.5)]"
                initial={{ bottom: '50%', left: '50%', opacity: 0 }}
                animate={{
                  bottom: ['50%', '85%'],
                  left: ['50%', `${30 + (i % 2) * 40}%`],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1, 0.5],
                }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.5 + 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Layer Cards */}
          <div className="relative space-y-4" style={{ zIndex: 2 }}>
            {/* Top Layer - Smart Factory (Level 5) */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[70%] feature-card group cursor-pointer border-accent/30 bg-gradient-to-r from-accent/10 via-card to-accent/10 hover:border-accent/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                    <Factory className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-accent/20 text-accent font-mono">L5</span>
                      <h3 className="font-semibold text-foreground">
                        Quick Agent Factory
                        <span className="text-accent ml-2">(智能工场)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于MCP的数字员工生产线</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-accent"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
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
              <div className="w-[75%] feature-card group cursor-pointer border-primary/30 hover:border-primary/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Brain className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono">L4</span>
                      <h3 className="font-semibold text-foreground">
                        Quick Mind
                        <span className="text-primary ml-2">(决策大脑)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于"混合智能"的认知中枢</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 3 - Integration Hub (Middle Layer) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center py-6"
            >
              <div className="w-[85%] relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative glass-card rounded-2xl p-6 border-2 border-dashed border-primary/40">
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center">
                        <motion.div
                          className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                    <div className="text-center">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono">L3</span>
                        <h3 className="font-bold text-lg text-foreground">数据融合层</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">整合底层数据与资源 → 向上传递决策信息</p>
                    </div>
                    <div className="flex gap-2">
                      <motion.div
                        className="w-2 h-8 rounded-full bg-primary/60"
                        animate={{ height: ['32px', '24px', '32px'] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-2 h-6 rounded-full bg-accent/60"
                        animate={{ height: ['24px', '32px', '24px'] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      />
                      <motion.div
                        className="w-2 h-8 rounded-full bg-primary/60"
                        animate={{ height: ['32px', '24px', '32px'] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Level 2 - Quick Context */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[75%] feature-card group cursor-pointer border-primary/30 hover:border-primary/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono">L2</span>
                      <h3 className="font-semibold text-foreground">
                        Quick Context
                        <span className="text-primary ml-2">(灵动快境)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">从"人本体验"到"自动语境"的代际跨越</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 1 - Quick Fabric */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[80%] feature-card group cursor-pointer border-primary/30 hover:border-primary/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Network className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono">L1</span>
                      <h3 className="font-semibold text-foreground">
                        Quick Fabric
                        <span className="text-primary ml-2">(资源织网)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">零侵入的异构资源网</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Level 0 - Quick AI Data (Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="w-[85%] feature-card group cursor-pointer border-primary/30 bg-gradient-to-r from-primary/10 via-card to-primary/10 hover:border-primary/50">
                <div className="flex items-center gap-4 p-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Database className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-xs bg-primary/20 text-primary font-mono">L0</span>
                      <h3 className="font-semibold text-foreground">
                        Quick AI Data
                        <span className="text-primary ml-2">(全域记忆)</span>
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">基于开放标准的写探习逻辑湖仓</p>
                  </div>
                  <motion.div
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Labels */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-muted-foreground font-mono whitespace-nowrap">
            ← 数据流向 →
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaaSSection;
