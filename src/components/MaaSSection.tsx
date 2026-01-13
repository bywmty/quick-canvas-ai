import { motion } from "framer-motion";
import { Database, Network, Brain, Zap, Factory } from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Quick Agent Factory",
    subtitle: "智能工场",
    description: "基于MCP的数字员工生产线",
  },
  {
    icon: Brain,
    title: "Quick Mind",
    subtitle: "决策大脑",
    description: "基于\"混合智能\"的认知中枢",
  },
  {
    icon: Zap,
    title: "Quick Context",
    subtitle: "灵动快境",
    description: "从\"人本体验\"到\"自动语境\"的代际跨越",
  },
  {
    icon: Network,
    title: "Quick Fabric",
    subtitle: "资源织网",
    description: "零侵入的异构资源网",
  },
  {
    icon: Database,
    title: "Quick AI Data",
    subtitle: "全域记忆",
    description: "基于开放标准的写探习逻辑湖仓",
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 animate-spin-slow" />
              
              {/* Inner Structure */}
              <div className="absolute inset-8 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-secondary to-card border border-primary/40 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">MaaS</p>
                      <p className="text-primary font-bold text-lg">智能基建</p>
                    </div>
                  </div>
                </div>
                
                {/* Orbit Points */}
                {[0, 72, 144, 216, 288].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-primary/60 glow-primary"
                    style={{
                      top: `${50 + 40 * Math.sin((deg * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.cos((deg * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="feature-card group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                      <span className="text-primary ml-2">({feature.subtitle})</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaaSSection;
