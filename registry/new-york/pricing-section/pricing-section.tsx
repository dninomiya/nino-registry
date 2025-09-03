import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MarketingSection, {
  MarketingSectionTitle,
  MarketingSectionContent,
} from "../marketing-section/marketing-section";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "スターター",
      price: "¥0",
      period: "/月",
      description: "個人利用や小規模チーム向け",
      features: ["基本機能", "月間100リクエスト", "メールサポート"],
      popular: false,
    },
    {
      name: "プロフェッショナル",
      price: "¥2,980",
      period: "/月",
      description: "成長中のビジネス向け",
      features: [
        "全機能利用可能",
        "月間10,000リクエスト",
        "優先サポート",
        "カスタム統合",
      ],
      popular: true,
    },
    {
      name: "エンタープライズ",
      price: "お問い合わせ",
      period: "",
      description: "大企業向けソリューション",
      features: [
        "無制限リクエスト",
        "専任サポート",
        "SLA保証",
        "オンプレミス対応",
      ],
      popular: false,
    },
  ];

  return (
    <MarketingSection>
      <MarketingSectionContent>
        <MarketingSectionTitle>料金プラン</MarketingSectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  人気
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="text-lime-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {plan.price === "お問い合わせ" ? "お問い合わせ" : "始める"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
