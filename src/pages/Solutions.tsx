import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Video, 
  Package, 
  Landmark,
  TrendingUp,
  Target,
  Users,
  Brain,
  Zap,
  BarChart3,
  MousePointerClick,
  DollarSign,
  PieChart,
  Shield,
  Clock
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: "primary" | "accent";
}

const StatCard = ({ icon, label, value, color = "primary" }: StatCardProps) => (
  <motion.div 
    className="flex flex-col items-center p-6"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className={`w-20 h-20 rounded-full border-4 ${
      color === "primary" ? "border-primary/50" : "border-accent/50"
    } flex items-center justify-center mb-4 relative`}>
      <div className={`absolute inset-0 rounded-full ${
        color === "primary" ? "bg-primary/10" : "bg-accent/10"
      } animate-pulse`} />
      <div className={color === "primary" ? "text-primary" : "text-accent"}>
        {icon}
      </div>
    </div>
    <span className="text-muted-foreground text-sm mb-2">{label}</span>
    <span className={`text-2xl md:text-3xl font-bold ${
      color === "primary" ? "text-gradient-primary" : "text-gradient-accent"
    }`}>{value}</span>
  </motion.div>
);

interface CaseStudyProps {
  industry: string;
  type: "RaaS" | "MaaS";
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: StatCardProps[];
  highlights?: { title: string; content: string }[];
  background?: string;
  isReversed?: boolean;
}

const CaseStudy = ({ 
  industry, 
  type, 
  icon, 
  title, 
  description, 
  stats, 
  highlights,
  isReversed 
}: CaseStudyProps) => (
  <motion.div
    variants={itemVariants}
    className="relative"
  >
    {/* Glowing background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
    
    <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />
      
      <div className={`relative z-10 grid md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Content Side */}
        <div className={isReversed ? 'md:order-2' : ''}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">{industry}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  type === "RaaS" 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : "bg-accent/20 text-accent border border-accent/30"
                }`}>
                  {type}案例
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-1">{title}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-foreground/90 leading-relaxed mb-6 text-base md:text-lg">
            {description}
          </p>
          
          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-semibold text-primary">{highlight.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{highlight.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Stats Side */}
        <div className={`${isReversed ? 'md:order-1' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <StatCard key={idx} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Solutions = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      industry: "电商行业",
      type: "RaaS",
      icon: <ShoppingCart className="w-7 h-7 text-primary" />,
      title: "北美工艺品电商商城广告系统",
      description: "我们的数字员工同样表现卓越。以广告投放场景为例，这不再是单点工具，而是策略、执行、创意三个Agent的协同作战。策略Agent像大脑一样规划预算，执行Agent像双手一样跨平台操作，遇到关键决策自动请求人工确认，实现了10倍人效的提升。",
      stats: [
        { icon: <DollarSign className="w-8 h-8" />, label: "广告支出", value: "$69.09K", color: "primary" },
        { icon: <TrendingUp className="w-8 h-8" />, label: "销售额", value: "$820.00", color: "accent" },
        { icon: <Users className="w-8 h-8" />, label: "曝光量", value: "14,032", color: "primary" },
        { icon: <MousePointerClick className="w-8 h-8" />, label: "点击量", value: "1,870", color: "primary" },
        { icon: <BarChart3 className="w-8 h-8" />, label: "点击率", value: "2.72%", color: "accent" },
        { icon: <PieChart className="w-8 h-8" />, label: "ROAS", value: "400.27%", color: "accent" },
      ],
      highlights: [
        { title: "多Agent协同", content: "策略、执行、创意三个Agent协同作战，实现智能化广告投放" },
        { title: "人效提升", content: "关键决策自动请求人工确认，实现10倍人效提升" },
      ]
    },
    {
      industry: "直播行业",
      type: "RaaS",
      icon: <Video className="w-7 h-7 text-primary" />,
      title: "全栈数字员工团队自动化闭环",
      description: "公司提供全栈数字员工团队包括运营、中控、投手、客服实现了完全的自动化闭环。做到了单台设备支持20个平台同时高清推流，ROI超过40。趣云OS训练出来的数字员工，具备了极高的稳定性与实战能力。",
      stats: [
        { icon: <MousePointerClick className="w-8 h-8" />, label: "点击率提升", value: "7%", color: "primary" },
        { icon: <TrendingUp className="w-8 h-8" />, label: "ROI提升", value: "87.5%", color: "accent" },
        { icon: <Zap className="w-8 h-8" />, label: "消耗提升", value: "37%", color: "primary" },
      ],
      highlights: [
        { title: "目标达成", content: "①精准圈定核心人群迭代创意内容素材 ②提升抖音CID广告投放转化达成生意增长" },
        { title: "品牌背景", content: "入局抖音后，同类型产品功效同质化严重，行业间内容素材的高度相似，给品牌的投放亟需寻找新的方向突破口" },
      ],
      isReversed: true
    },
    {
      industry: "快消行业",
      type: "MaaS",
      icon: <Package className="w-7 h-7 text-primary" />,
      title: "全球领先乳制品集团数据平台",
      description: "我们服务了全球领先的乳制品集团。利用Quick AI Data，我们为他们处理了超过1000亿条消费者行为数据，构建了全域One-ID体系，直接帮助广告点击率提升了30%。",
      stats: [
        { icon: <BarChart3 className="w-8 h-8" />, label: "消费者行为数据", value: "1000亿+", color: "primary" },
        { icon: <Target className="w-8 h-8" />, label: "广告点击率提升", value: "30%", color: "accent" },
        { icon: <Users className="w-8 h-8" />, label: "全域One-ID", value: "已构建", color: "primary" },
      ],
      highlights: [
        { title: "技术方案", content: "利用Quick AI Data处理海量消费者行为数据，构建全域One-ID体系" },
        { title: "核心价值", content: "实现消费者精准画像，直接提升广告投放效果" },
      ]
    },
    {
      industry: "金融行业",
      type: "MaaS",
      icon: <Landmark className="w-7 h-7 text-primary" />,
      title: "头部金融科技公司风控系统",
      description: "面对最严苛的风控要求，我们帮助头部金融科技公司实现了语义逻辑的自愈合。通过SGKC内核与风险预判机制，我们将信贷审批的准确率提升到了惊人的98.3%，同时降低了70%的人工审核成本，实现了安全与效率的双赢。",
      stats: [
        { icon: <Shield className="w-8 h-8" />, label: "信贷审批准确率", value: "98.3%", color: "accent" },
        { icon: <Clock className="w-8 h-8" />, label: "人工审核成本降低", value: "70%", color: "primary" },
        { icon: <Brain className="w-8 h-8" />, label: "语义逻辑自愈合", value: "已实现", color: "accent" },
      ],
      highlights: [
        { title: "技术核心", content: "SGKC内核与风险预判机制，实现语义逻辑的自愈合" },
        { title: "业务价值", content: "安全与效率双赢，大幅降低人工成本的同时提升审批准确率" },
      ],
      isReversed: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
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
              <span className="text-gradient-primary">解决方案</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              从电商到金融，从直播到快消，趣云AI为各行业提供定制化的智能解决方案，
              <br className="hidden md:block" />
              助力企业实现数字化转型与业务增长
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-16"
          >
            {caseStudies.map((caseStudy, index) => (
              <CaseStudy key={index} {...caseStudy} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-foreground">准备好</span>
              <span className="text-gradient-accent">开启您的AI之旅</span>
              <span className="text-foreground">了吗？</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              无论您身处哪个行业，趣云AI都能为您提供专业的解决方案
            </p>
            <motion.button
              className="btn-demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              预约演示
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;