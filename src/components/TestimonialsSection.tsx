import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "黄-飞",
    title: "AdPlus CEO",
    content: "我从别处都得到干扰沃，经营我们可会直到经济不断发展的业务，与数据集采最终需求成本无关，享有比过去更好的设施提供未来运营提升更简单收货渠道，结果确实不比如满意但保保新更快，让我们看到更美味好更多的入内看展到去更广泛提示",
  },
  {
    name: "李-明",
    title: "TechCorp CTO",
    content: "趣云AI帮助我们实现了业务流程的全面智能化，数字员工的引入大幅提升了运营效率，同时降低了人力成本。这是我们数字化转型的关键一步。",
  },
  {
    name: "王-华",
    title: "DataSmart CEO",
    content: "MaaS+RaaS的一体化架构让我们的数据资产真正发挥了价值，智能决策系统为业务增长提供了强有力的支撑。",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            趣云<span className="text-gradient-primary">他们都说好</span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 p-[1px]">
              <div className="w-full h-full rounded-2xl bg-card" />
            </div>

            <div className="relative glass-card rounded-2xl p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[120px]"
                >
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {testimonials[current].content}
                  </p>
                  
                  <div className="text-center">
                    <p className="font-semibold text-foreground text-lg">
                      {testimonials[current].name}
                    </p>
                    <p className="text-primary text-sm">
                      {testimonials[current].title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === current ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
