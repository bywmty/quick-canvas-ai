import { motion } from "framer-motion";

const FlywheelSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-foreground">
            MaaS筑底，RaaS破局
            <span className="text-gradient-accent">: 互为燃料的增长飞轮</span>
          </h2>
        </motion.div>

        {/* Flywheel Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative aspect-[16/10]">
            {/* Left Gear - MaaS */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] aspect-square">
              <div className="relative w-full h-full">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-spin-slow" 
                     style={{ 
                       background: "conic-gradient(from 0deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05), hsl(var(--accent) / 0.2))" 
                     }} 
                />
                {/* Inner Core */}
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/50 flex items-center justify-center glow-accent">
                  <div className="text-center">
                    <p className="text-lg font-bold text-accent">MaaS</p>
                    <p className="text-xs text-muted-foreground">智能基建</p>
                  </div>
                </div>
                {/* Gear Teeth Effect */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-6 bg-accent/40 rounded-sm"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "center center",
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-48%)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right Gear - RaaS */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] aspect-square">
              <div className="relative w-full h-full">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-spin-reverse" 
                     style={{ 
                       background: "conic-gradient(from 0deg, hsl(var(--accent) / 0.2), hsl(var(--accent) / 0.05), hsl(var(--accent) / 0.2))" 
                     }} 
                />
                {/* Inner Core */}
                <div className="absolute inset-[20%] rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/50 flex items-center justify-center glow-accent">
                  <div className="text-center">
                    <p className="text-lg font-bold text-accent">RaaS</p>
                    <p className="text-xs text-muted-foreground">数字员工</p>
                  </div>
                </div>
                {/* Gear Teeth Effect */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-6 bg-accent/40 rounded-sm"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: "center center",
                      transform: `translate(-50%, -50%) rotate(${i * 30 + 15}deg) translateY(-48%)`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Connection Line */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-8 px-8">
            <div className="text-center">
              <p className="text-accent font-semibold">MaaS（智能基建）</p>
              <p className="text-sm text-muted-foreground mt-1">底层能力支撑</p>
            </div>
            <div className="text-center">
              <p className="text-accent font-semibold">RaaS（数字员工）</p>
              <p className="text-sm text-muted-foreground mt-1">业务交付层</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlywheelSection;
