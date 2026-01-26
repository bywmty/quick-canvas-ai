import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, Factory, Database, Brain, Target } from "lucide-react";

interface ProductStat {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

interface ProductFeature {
  title: string;
  subtitle: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  englishName: string;
  subtitle: string;
  description: string;
  icon: typeof Video;
  color: "primary" | "accent";
  stats: ProductStat[];
  features: ProductFeature[];
}

const products: Product[] = [
  {
    id: "renrenbo",
    name: "人人播",
    englishName: "RenRenBo",
    subtitle: "全栈数字员工驱动的直播平台",
    description: "区别于市场上只提供数字人形象的公司，我们提供包含运营、中控、投手、客服在内的 Agent 矩阵，实现直播间的完全自动化盈利闭环。",
    icon: Video,
    color: "primary",
    stats: [
      { label: "ROI", value: "> 40", suffix: "", description: "食品行业·中国大陆实测" },
      { label: "单直播间日均GMV", value: "1-3万", suffix: "RMB", description: "" },
      { label: "人效提升", value: "10倍", suffix: "", description: "降低人工成本" },
    ],
    features: [
      {
        title: "Agent 差异化",
        subtitle: "The Core Difference",
        description: "全栈数字员工解决方案：包含运营、中控、投手、客服在内的 Agent 矩阵，实现直播间的完全自动化盈利闭环。"
      },
      {
        title: "技术壁垒",
        subtitle: "Video Gene",
        description: "高速编解码 + 智能多流推拉：单台设备支持 20+ 平台同时高清推流，解决高并发传输难题。"
      },
      {
        title: "未来预测",
        subtitle: "Future Vision",
        description: "预计 2027 年随着 Agent 在更多高价值通用场景的普及，RaaS综合毛利有望突破 15%。"
      },
      {
        title: "全球化出海计划",
        subtitle: "Go-to-Market",
        description: "2026 全球化元年：拓展东南亚（印尼/泰国）与欧美市场。开启数字员工租赁模式——按 $0.5 - $1.5 /小时收费。"
      },
    ]
  },
  {
    id: "agent-factory",
    name: "智能工厂",
    englishName: "Quick Agent Factory",
    subtitle: "基于 MCP 的数字员工生产线",
    description: "采用开放的 MCP（Model Context Protocol）标准，将业务指令直接转化为系统操作，由流程创建/修改专家 Agent 自动化工作流。",
    icon: Factory,
    color: "accent",
    stats: [],
    features: [
      {
        title: "MCP协议万能接口",
        subtitle: "Station 1（执行端）",
        description: "采用开放的 MCP（Model Context Protocol）标准，将业务指令直接转化为系统操作，由流程创建/修改专家 Agent 自动化工作流。"
      },
      {
        title: "人机协同机制",
        subtitle: "Station 2（协同端）",
        description: "拒绝 AI 黑盒操作。关键业务节点（如转账、发货）自动触发人工确认（Manual Confirmation），人控最后一道关，确保执行绝对安全。"
      },
      {
        title: "共识审核与审计",
        subtitle: "Station 3（审计端）",
        description: "采用执行审核小组机制，由多个 Agents 对关键核心动作进行多 Agent 共识审核。系统可生成可追溯的推理证明树（Proof Tree），确保审计透明。"
      },
    ]
  },
  {
    id: "quick-ai-data",
    name: "Quick AI Data",
    englishName: "全域记忆",
    subtitle: "基于开放标准的零拷贝逻辑湖仓",
    description: "实现 SQL+向量+全文 三擎合一。无需单独部署向量数据库，直接对非结构化文档进行高维检索，为 AI 提供毫秒级、高精度的上下文召回。",
    icon: Database,
    color: "primary",
    stats: [],
    features: [
      {
        title: "零拷贝索引",
        subtitle: "Zero-Copy Indexing",
        description: "采用行业通用的开放数据标准，只建立语义索引，不触碰、不搬运客户的原始物理数据，确保数据主权，实现 Day 1 即用。"
      },
      {
        title: "混合向量检索",
        subtitle: "Hybrid Vector Retrieval",
        description: "实现 SQL+向量+全文 三擎合一。无需单独部署向量数据库，直接对非结构化文档进行高维检索，为 AI 提供毫秒级、高精度的上下文召回。"
      },
      {
        title: "WAP治理",
        subtitle: "WAP Governance",
        description: "实施 写-审-发（Write-Audit-Publish）机制，像管理代码一样管理数据版本，确保 AI 决策数据的绝对纯净和可回溯。"
      },
    ]
  },
  {
    id: "quick-mind",
    name: "Quick Mind",
    englishName: "决策大脑",
    subtitle: "基于混合智能的认知中枢",
    description: "拒绝单一模型锁定。智能判别任务类型难度，动态路由至 OpenAI、Claude、DeepSeek 或私有模型，实现智商与成本的最优平衡。",
    icon: Brain,
    color: "accent",
    stats: [],
    features: [
      {
        title: "指令遵循与规划",
        subtitle: "Instruction Following",
        description: "采用指令遵循助手 Agent 机制，动态检查用户语义与权限，并在需求不清时主动提问细化，确保规划的起点绝对正确。"
      },
      {
        title: "模型无关路由",
        subtitle: "Model Agnostic Routing",
        description: "拒绝单一模型锁定。智能判别任务类型难度，动态路由至 OpenAI、Claude、DeepSeek 或私有模型，实现智商与成本的最优平衡。"
      },
      {
        title: "沙箱推演与问题发现",
        subtitle: "Sandbox Simulation",
        description: "Think before Act。由问题发现专家 Agent 提前识别潜在风险，在逻辑沙箱中模拟后果，确保决策安全，支持反事实推理。"
      },
    ]
  },
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const Icon = product.icon;
  const isPrimary = product.color === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      id={product.id}
      className="scroll-mt-24"
    >
      <div className={`relative rounded-3xl overflow-hidden ${isPrimary ? 'border-primary/30' : 'border-accent/30'} border bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl`}>
        {/* Header */}
        <div className={`relative p-8 md:p-12 ${isPrimary ? 'bg-gradient-to-r from-primary/10 to-transparent' : 'bg-gradient-to-r from-accent/10 to-transparent'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isPrimary ? 'bg-primary/20 glow-primary' : 'bg-accent/20 glow-accent'}`}>
              <Icon className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className={`text-2xl md:text-3xl font-bold ${isPrimary ? 'text-gradient-primary' : 'text-gradient-accent'}`}>
                  {product.name}
                </h3>
                <span className="text-muted-foreground text-lg">（{product.englishName}）</span>
              </div>
              <p className={`text-xl font-medium ${isPrimary ? 'text-primary/80' : 'text-accent/80'}`}>
                {product.subtitle}
              </p>
            </div>
          </div>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-4xl">
            {product.description}
          </p>

          {/* Stats */}
          {product.stats.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {product.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className={`text-3xl font-bold ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                    {stat.value}
                    <span className="text-lg ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-foreground mt-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="p-8 md:p-12 pt-0 md:pt-0">
          <div className={`grid grid-cols-1 ${product.features.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-6 mt-8`}>
            {product.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                  isPrimary 
                    ? 'border-primary/20 bg-primary/5 hover:border-primary/40 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]' 
                    : 'border-accent/20 bg-accent/5 hover:border-accent/40 hover:shadow-[0_0_30px_hsl(var(--accent)/0.15)]'
                }`}
              >
                <h4 className={`text-lg font-semibold mb-1 ${isPrimary ? 'text-primary' : 'text-accent'}`}>
                  {feature.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {feature.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15)_0%,transparent_50%)]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">产品介绍</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MaaS筑底 + RaaS破局：从数据基建到数字员工，打造企业AI全栈解决方案
            </p>
          </motion.div>

          {/* Product Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {products.map((product) => {
              const Icon = product.icon;
              const isPrimary = product.color === "primary";
              return (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                    isPrimary
                      ? 'border-primary/30 bg-primary/10 hover:bg-primary/20 hover:border-primary/50'
                      : 'border-accent/30 bg-accent/10 hover:bg-accent/20 hover:border-accent/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isPrimary ? 'text-primary' : 'text-accent'}`} />
                  <span className={isPrimary ? 'text-primary' : 'text-accent'}>{product.name}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备好开启 <span className="text-gradient-primary">AI 之旅</span> 了吗？
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              联系我们的专家团队，了解如何将趣云AI产品应用于您的业务场景
            </p>
            <a
              href="/about#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              <Target className="w-5 h-5" />
              联系我们
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
