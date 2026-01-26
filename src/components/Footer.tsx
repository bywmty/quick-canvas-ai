const footerLinks = {
  company: {
    title: "关于趣云",
    links: [
      { label: "公司介绍", href: "/about" },
      { label: "企业文化", href: "/about#culture" }
    ],
  },
  products: {
    title: "产品服务",
    links: [
      { label: "人人播", href: "/products#renrenbo" },
      { label: "智能工厂", href: "/products#agent-factory" },
      { label: "Quick AI Data", href: "/products#quick-ai-data" },
      { label: "Quick Mind", href: "/products#quick-mind" },
    ],
  },
  solutions: {
    title: "解决方案",
    links: ["零售行业", "金融行业", "制造行业", "快消行业"],
  },
  // support: {
  //   title: "支持与服务",
  //   links: ["技术文档", "API接口", "常见问题", "联系我们"],
  // },
  contact: {
    title: "联系我们",
    links: [
      { label: "商务合作", href: "/about#contact" },
      { label: "技术支持", href: "/about#contact" }
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={typeof link === 'string' ? link : link.label}>
                    {typeof link === 'string' ? (
                      <a
                        href="#"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/qyai.png" alt="Logo" className="w-10 h-8" />
            <span className="text-lg font-bold">
              <span className="text-gradient-primary">趣云</span>
              <span className="text-foreground ml-1">AI</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>北京趣云万维信息技术有限公司</span>
            <span className="hidden md:inline">|</span>
            <span>京ICP备2020041042号-1</span>
            <span className="hidden md:inline">|</span>
            <span>京公网安备 11010502043077号</span>
          </div>

          <p className="text-sm text-muted-foreground">
            Copyright © 2024 趣云AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
