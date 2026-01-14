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

        {/* Testimonial Card with Side Arrows */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex items-center gap-4"
          >
            {/* Left Arrow */}
            <button
              onClick={prev}
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Card */}
            <div className="flex-1 relative">
              {/* Outer Frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute inset-[3px] rounded-2xl border border-primary/20" />
              
              {/* Inner Content */}
              <div className="relative glass-card rounded-2xl p-8 md:p-10 m-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Name and Title at Top */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Avatar Placeholder */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {testimonials[current].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-lg">
                          {testimonials[current].name}
                        </p>
                        <p className="text-primary text-sm">
                          {testimonials[current].title}
                        </p>
                      </div>
                      <Quote className="w-8 h-8 text-primary/20 ml-auto" />
                    </div>
                    
                    {/* Quote Content */}
                    <div className="relative pl-4 border-l-2 border-primary/30">
                      <p className="text-muted-foreground text-lg leading-relaxed min-h-[100px]">
                        "{testimonials[current].content}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === current 
                          ? "bg-primary w-6" 
                          : "bg-muted hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
            </div>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
