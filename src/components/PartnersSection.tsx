import { motion } from "framer-motion";

const partners = [
  "银联云闪付", "RQ", "唯品会", "Jeep", "樟下", "马记永", "三七互娱", "娃哈哈",
  "招商银行", "华润集团", "希尔顿", "百联集团", "可口可乐", "招商银行", "RQ", "唯品会",
];

const PartnersSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            您信赖的，他们也信赖<span className="text-gradient-primary">趣云</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-4 md:grid-cols-8 gap-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={`${partner}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="aspect-[3/2] rounded-lg bg-secondary/50 border border-border/50 flex items-center justify-center p-4 hover:border-primary/30 transition-colors"
            >
              <span className="text-xs md:text-sm text-muted-foreground font-medium text-center">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
