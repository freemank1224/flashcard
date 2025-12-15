import { 
  ShieldCheck, 
  Store, 
  TrendingUp, 
  Globe2, 
  ShoppingBag, 
  AlertTriangle, 
  Tag, 
  PackageCheck, 
  Languages, 
  FileText, 
  Gavel, 
  ClipboardList 
} from 'lucide-react';
import { CardData } from './types';

export const cards: CardData[] = [
  {
    id: 1,
    title: "核心战略：合规护城河",
    subtitle: "Core Strategy",
    content: [
      "🛡️ 首重合规经营，追求有质量的增长。",
      "🧱 合规不是成本，是品牌长期的“护城河”。",
      "🤝 核心价值：信任、安全、一致性。",
      "✨ 目标：通过严苛标准筛选出真正的优质品牌。"
    ],
    icon: ShieldCheck,
    theme: 'sage',
    footer: "Strategy First"
  },
  {
    id: 2,
    title: "四大合规支柱",
    subtitle: "Four Pillars",
    content: [
      "1️⃣ 资质 (Qualifications): 备案档案与配方真实性校验。",
      "2️⃣ 欧代 (EU Rep): 必须真实存在，代理范围含化妆品。",
      "3️⃣ 标签 (Label): 英/法/德/意7国语言审查。",
      "4️⃣ 宣传 (Promotion): 拒绝夸大，图片与实物必须一致。"
    ],
    icon: Store,
    theme: 'gold',
    footer: "Compliance Framework"
  },
  {
    id: 3,
    title: "品牌分级与孵化",
    subtitle: "Brand Grading",
    content: [
      "🌱 起始 (2分): 无特殊权益。",
      "🌿 中档 (3-4分): 享受比价权益。",
      "🌳 高档 (5-6分): 品质优待 + 营销支持。",
      "📈 提分途径：拓展线下门店、权威报道、专利奖项。"
    ],
    icon: TrendingUp,
    theme: 'sky',
    footer: "Growth Path"
  },
  {
    id: 4,
    title: "流量分配逻辑",
    subtitle: "Traffic Allocation",
    content: [
      "🔍 搜索流量: “人找货”，精准匹配购买意图。",
      "📢 营销流量: 全球70+国家投放，比重**大幅增加**。",
      "🤖 个性化推荐: 算法驱动，优先展示优质合规品。",
      "💡 重点：参与大促（百亿补贴、万人团）获取曝光。"
    ],
    icon: ShoppingBag,
    theme: 'salmon',
    footer: "Marketing Focus"
  },
  {
    id: 5,
    title: "2025 热销风向标",
    subtitle: "2025 Trends",
    content: [
      "🦷 口腔护理: 牙膏 (50万+销量)，增长18%。",
      "🧳 便携出行: 旅行容器、免水洗发需求旺盛。",
      "💇 美发造型: 补色剂、发泥发蜡。",
      "💄 彩妆Top5: 眼线、眉笔、眼影、眉线、口红。"
    ],
    icon: TrendingUp,
    theme: 'gold',
    footer: "Market Insights"
  },
  {
    id: 6,
    title: "全球合规等级",
    subtitle: "Compliance Levels",
    content: [
      "🔴 欧盟极高危 (德/意/奥): 本体完全合规 + 彩盒/标签二选一。",
      "🟠 欧盟高危 (法/丹): 同极高危要求。",
      "🟡 欧盟普通 (波/西): 本体可用英文欧代。",
      "🔵 独立要求 (美/英): 需符合当地特定FDA/脱欧规定。"
    ],
    icon: Globe2,
    theme: 'sage',
    footer: "Global Zones"
  },
  {
    id: 7,
    title: "标签七大强制模块",
    subtitle: "Label Requirements",
    content: [
      "📝 产品名称 (建议4语)",
      "🏢 欧代信息 (真实地址)",
      "🏭 制造商 (美:FDA一致)",
      "⚖️ 原产地/净含量 (双制式)",
      "⏳ 保质期 (PAO+沙漏+日期)",
      "🔢 批次号 (真实可追溯)",
      "🧪 成分表 (INCI标准)"
    ],
    icon: Tag,
    theme: 'sky',
    footer: "Label Rules"
  },
  {
    id: 8,
    title: "包装形式合规公式",
    subtitle: "Packaging Logic",
    content: [
      "📦 核心原则：消费者必须看到完整信息。",
      "✅ 本体必须永远合规。",
      "📌 若有贴标：贴标需完全合规 (彩盒可豁免)。",
      "🎁 若无贴标：彩盒需完全合规。",
      "🚫 禁止：本体、彩盒、贴标均缺失关键信息。"
    ],
    icon: PackageCheck,
    theme: 'salmon',
    footer: "Packaging Math"
  },
  {
    id: 9,
    title: "德国/欧盟 语言铁律",
    subtitle: "Language Rules",
    content: [
      "🇩🇪 德国: 100% 德语强制，需BfArM通报。",
      "🇫🇷 法国: 100% 法语强制，需ANSM通报。",
      "🇮🇹 意大利: 100% 意语强制，卫生部通报。",
      "🇬🇧 美国/英国/日本: 英语/日语即可 (部分需双语)。"
    ],
    icon: Languages,
    theme: 'sage',
    footer: "Strict Enforcement"
  },
  {
    id: 10,
    title: "紧急通告：CPSR升级",
    subtitle: "Urgent Update",
    content: [
      "🚨 德国CPSR制度重大升级！",
      "👨‍⚕️ 资质：需欧盟认证毒理学家签署。",
      "📂 档案：PIF需完整，含GMP证明及功效证据。",
      "⚡ 响应：监管检查时，欧代需迅速提供文件。",
      "🛑 风险：无有效CPSR = 立即下架。"
    ],
    icon: AlertTriangle,
    theme: 'salmon',
    footer: "Urgent Action"
  },
  {
    id: 11,
    title: "违规代价与处罚",
    subtitle: "Penalties",
    content: [
      "💸 虚假欧代: 罚款 €2万-10万+，刑事指控。",
      "📉 过期CPSR: 罚款 €1万-5万，重新上市需3个月。",
      "🏷️ 标签不全: 罚款 €5千-5万，强制重印。",
      "🤥 虚假宣传: 罚款 €2万+，媒体曝光，信誉破产。"
    ],
    icon: Gavel,
    theme: 'gold',
    footer: "Risk Warning"
  },
  {
    id: 12,
    title: "立即行动清单 (P0)",
    subtitle: "Action Plan",
    content: [
      "📅 本周：列出德国清单，核查现有CPSR与欧代真实性。",
      "🎨 本月：完成德语合规标签设计，补齐PIF/GMP。",
      "🚀 本季度：标签打样验证，完成CPNP通报。",
      "🔍 长期：建立供应链追溯与上市后监测体系。"
    ],
    icon: ClipboardList,
    theme: 'sky',
    footer: "To-Do List"
  }
];