import { motion } from "framer-motion";

// const partners = [
//   "银联云闪付", "RQ", "唯品会", "Jeep", "樟下", "马记永", "三七互娱", "娃哈哈",
//   "招商银行", "华润集团", "希尔顿", "百联集团", "可口可乐", "招商银行", "RQ", "唯品会",
// ];

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
          className="overflow-hidden"
        >
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {(() => {
              // 生成1~60的数组
              const arr = Array.from({ length: 60 }, (_, i) => i + 1);
              // 洗牌算法打乱顺序
              for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
              }
              // 取前24个
              return arr.slice(0, 24).map((num, index) => {
                const isLast = num === 60;
                const grayImg = isLast
                  ? `https://staticscdn.quclouds.com/1.0.0/www/images/home/brand/brand60.png?r=72183`
                  : `https://staticscdn.quclouds.com/1.0.0/www/images/home/brand/brand${num}_gray.png?r=72183`;
                const colorImg = `https://staticscdn.quclouds.com/1.0.0/www/images/home/brand/brand${num}.png?r=72183`;
                return (
                  <motion.div
                    key={`partner-${num}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="aspect-[3/2] rounded-xl bg-white shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <img
                      src={grayImg}
                      alt={`合作品牌${num}`}
                      className="max-h-full max-w-full object-contain transition-all duration-300"
                      onMouseEnter={e => (e.currentTarget.src = colorImg)}
                      onMouseLeave={e => (e.currentTarget.src = grayImg)}
                    />
                  </motion.div>
                );
              });
            })()}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
