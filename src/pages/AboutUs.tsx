import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Brain,
  Hand,
  Heart,
  Users,
  Target,
  Handshake,
  Mail,
  Shield,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  // Floating particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  // Data flow particles for brain visualization
  const dataParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: i * 30 * (Math.PI / 180),
    delay: i * 0.3,
  }));

  const cultureItems = [
    {
      icon: Shield,
      title: "企业担当",
      description: "以责任为基石，以诚信为纽带，持续为客户创造价值",
    },
    {
      icon: Heart,
      title: "快乐",
      description: "营造积极向上的工作氛围，让每一位伙伴都能快乐成长",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "以客户为一",
      description: "客户需求是我们一切工作的出发点",
    },
    {
      icon: Users,
      title: "以人为中心",
      description: "尊重每一位员工，激发无限潜能",
    },
    {
      icon: Handshake,
      title: "推动共赢",
      description: "与合作伙伴携手，共创美好未来",
    },
  ];

  const contacts = [
    { type: "市场合作", email: "marketing@quclouds.com", icon: Mail },
    { type: "商务合作", email: "bd@quclouds.com", icon: Mail },
    { type: "媒体合作", email: "media@quclouds.com", icon: Mail },
    { type: "业务合作", email: "sales@quclouds.com", icon: Mail },
  ];

  const commitments = [
    {
      icon: Shield,
      title: "客户至上承诺",
      description: "我们承诺将客户利益放在首位，提供专业、高效、贴心的服务体验",
    },
    {
      icon: Clock,
      title: "7x24小时服务",
      description: "全天候技术支持团队，确保您的业务永不掉线，问题及时响应处理",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 cyber-grid">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">关于我们</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              用AI赋能企业智慧，让数据创造无限价值
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* AI Brain & Hands Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] flex items-center justify-center"
            >
              {/* Central Brain */}
              <div className="relative">
                {/* Outer rotating ring */}
                <motion.div
                  className="absolute -inset-16 rounded-full border-2 border-dashed border-primary/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Middle pulse ring */}
                <motion.div
                  className="absolute -inset-12 rounded-full border border-primary/40"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Inner glow ring */}
                <motion.div
                  className="absolute -inset-8 rounded-full bg-primary/10"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Brain icon container */}
                <motion.div
                  className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center glow-primary"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Brain className="w-16 h-16 text-primary" />

                  {/* Neural connection lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 128 128"
                  >
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.line
                        key={i}
                        x1="64"
                        y1="64"
                        x2={64 + 50 * Math.cos((angle * Math.PI) / 180)}
                        y2={64 + 50 * Math.sin((angle * Math.PI) / 180)}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeOpacity="0.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* Data flow particles */}
                {dataParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    className="absolute w-3 h-3 rounded-full bg-primary"
                    style={{
                      left: "50%",
                      top: "50%",
                      marginLeft: "-6px",
                      marginTop: "-6px",
                    }}
                    animate={{
                      x: [0, Math.cos(particle.angle) * 100],
                      y: [0, Math.sin(particle.angle) * 100],
                      opacity: [1, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: particle.delay,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Hands extending from brain */}
                <motion.div
                  className="absolute -left-24 top-1/2 -translate-y-1/2"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/*  */}
                  <motion.div
                    className="p-4 rounded-full bg-accent/20 border border-accent/40"
                    animate={{ x: [5, -5, 5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Hand className="w-8 h-8 text-accent transform scale-x-[-1]" />
                  </motion.div>
                  {/* Connection line */}
                  <div className="absolute right-0 top-1/2 w-16 h-0.5 bg-gradient-to-r from-accent/50 to-primary/50" />
                </motion.div>

                <motion.div
                  className="absolute -right-24 top-1/2 -translate-y-1/2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.div
                    className="p-4 rounded-full bg-accent/20 border border-accent/40"
                    animate={{ x: [-5, 5, -5] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Hand className="w-8 h-8 text-accent" />
                  </motion.div>
                  {/* Connection line */}
                  <div className="absolute left-0 top-1/2 w-16 h-0.5 bg-gradient-to-l from-accent/50 to-primary/50" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient-primary">公司介绍</span>
              </h2>
              <div className="feature-card">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  趣云AI致力于为您构建
                  <span className="text-primary font-semibold">
                    "企业的大脑"
                  </span>
                  ， 并派遣能干活的
                  <span className="text-accent font-semibold">"双手"</span>，
                  让AI更懂业务，真正实现从数据到价值的智能闭环。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Culture */}
      <section id="culture" className="py-24 relative cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              <span className="text-gradient-accent">企业文化</span>
            </h2>
            <p className="section-subtitle">以文化铸魂，用价值引领</p>
          </motion.div>

          {/* Culture Items */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {cultureItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="feature-card group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:glow-primary transition-all duration-300">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                className="feature-card text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-accent/10 border border-accent/30 mb-4 group-hover:glow-accent transition-all duration-300">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-24 relative" id="contact" >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              <span className="text-gradient-primary">联系我们</span>
            </h2>
            <p className="section-subtitle">期待与您的每一次交流</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center group hover:border-primary/50 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4 group-hover:glow-primary transition-all duration-300">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {contact.type}
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {contact.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-24 relative cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              <span className="text-gradient-accent">趣云数据服务承诺</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border/50 overflow-hidden group"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border"
                    style={{
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/30 mb-6 group-hover:glow-primary transition-all duration-300">
                    <commitment.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {commitment.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {commitment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
