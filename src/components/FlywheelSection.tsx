import { motion } from "framer-motion";

const FlywheelSection = () => {
  // Generate gear teeth
  const generateTeeth = (count: number, radius: number, offset: number = 0) => {
    return [...Array(count)].map((_, i) => {
      const angle = (i * 360) / count + offset;
      return (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '12px',
            height: '20px',
            top: '50%',
            left: '50%',
            transformOrigin: 'center center',
            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-t from-accent/60 to-accent rounded-t-sm shadow-[0_0_8px_hsl(var(--accent)/0.5)]" />
        </motion.div>
      );
    });
  };

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
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative aspect-[16/10]">
            {/* Energy Flow Particles - Left to Right */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-lr-${i}`}
                className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent)),0_0_20px_hsl(var(--accent)/0.5)]"
                style={{
                  top: `${45 + Math.sin(i * 0.8) * 8}%`,
                  left: '35%',
                }}
                animate={{
                  x: [0, 120, 0],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Energy Flow Particles - Right to Left */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-rl-${i}`}
                className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)),0_0_20px_hsl(var(--primary)/0.5)]"
                style={{
                  top: `${55 + Math.sin(i * 0.8) * 8}%`,
                  left: '65%',
                }}
                animate={{
                  x: [0, -120, 0],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Left Gear - MaaS */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[42%] aspect-square">
              <motion.div 
                className="relative w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Outer Gear Ring with Teeth */}
                <div className="absolute inset-[5%] rounded-full border-4 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent">
                  {/* Gear Teeth */}
                  {generateTeeth(16, 95)}
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-[15%] rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/15 to-transparent" />
                
                {/* Inner Decorative Ring */}
                <div className="absolute inset-[25%] rounded-full border border-accent/50">
                  {/* Spokes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent left-1/2 -translate-x-1/2"
                      style={{ transform: `translateX(-50%) rotate(${i * 22.5}deg)` }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Center Core - Static */}
              <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border-2 border-accent/60 flex items-center justify-center glow-accent z-10">
                <div className="text-center">
                  <p className="text-xl font-bold text-accent">MaaS</p>
                  <p className="text-xs text-muted-foreground">智能基建</p>
                </div>
              </div>
              
              {/* Pulsing Glow Effect */}
              <motion.div
                className="absolute inset-[30%] rounded-full bg-accent/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Right Gear - RaaS */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[42%] aspect-square">
              <motion.div 
                className="relative w-full h-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Outer Gear Ring with Teeth */}
                <div className="absolute inset-[5%] rounded-full border-4 border-accent/40 bg-gradient-to-br from-accent/10 to-transparent">
                  {/* Gear Teeth - Offset to mesh */}
                  {generateTeeth(16, 95, 11.25)}
                </div>
                
                {/* Middle Ring */}
                <div className="absolute inset-[15%] rounded-full border-2 border-accent/30 bg-gradient-to-br from-accent/15 to-transparent" />
                
                {/* Inner Decorative Ring */}
                <div className="absolute inset-[25%] rounded-full border border-accent/50">
                  {/* Spokes */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-accent/40 to-transparent left-1/2 -translate-x-1/2"
                      style={{ transform: `translateX(-50%) rotate(${i * 22.5}deg)` }}
                    />
                  ))}
                </div>
              </motion.div>
              
              {/* Center Core - Static */}
              <div className="absolute inset-[35%] rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border-2 border-accent/60 flex items-center justify-center glow-accent z-10">
                <div className="text-center">
                  <p className="text-xl font-bold text-accent">RaaS</p>
                  <p className="text-xs text-muted-foreground">数字员工</p>
                </div>
              </div>
              
              {/* Pulsing Glow Effect */}
              <motion.div
                className="absolute inset-[30%] rounded-full bg-accent/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            {/* Center Connection - Energy Flow Channel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-16">
              {/* Connection Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full shadow-[0_0_10px_hsl(var(--accent)/0.5)]" />
              <div className="absolute top-[35%] left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="absolute top-[65%] left-0 right-0 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              
              {/* Energy Core */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/30 border border-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-12 px-4">
            <motion.div 
              className="text-center glass-card px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-accent font-semibold text-lg">MaaS（智能基建）</p>
              <p className="text-sm text-muted-foreground mt-1">底层能力支撑</p>
            </motion.div>
            <motion.div 
              className="text-center glass-card px-6 py-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-accent font-semibold text-lg">RaaS（数字员工）</p>
              <p className="text-sm text-muted-foreground mt-1">业务交付层</p>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 max-w-xl mx-auto"
          >
            MaaS为RaaS提供底层数据、资源、决策能力支撑；RaaS的业务落地数据反哺MaaS的能力迭代，形成互为燃料的增长闭环
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FlywheelSection;
