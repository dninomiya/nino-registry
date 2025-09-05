"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import MarketingSection, {
  MarketingSectionContent,
  MarketingSectionDescription,
  MarketingSectionHeader,
  MarketingSectionTitle,
} from "../marketing-section/marketing-section";

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [title, setTitle] = useState("料金プラン");

  useEffect(() => {
    // 3秒まつ
    setTimeout(() => {
      document.title = "年払いプラン";
    }, 3000);
  }, []);

  const plans = [
    {
      name: "スターター",
      price: "¥0",
      priceAnnual: "¥0",
      period: "/月",
      description: "個人利用や小規模チーム向け",
      features: ["基本機能", "月間100リクエスト", "メールサポート"],
      popular: false,
    },
    {
      name: "プロフェッショナル",
      price: "¥2,980",
      priceAnnual: "¥2,682",
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
      priceAnnual: "お問い合わせ",
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
    <MarketingSection id="pricing">
      <MarketingSectionHeader>
        <MarketingSectionTitle>料金プラン</MarketingSectionTitle>
        <MarketingSectionDescription>
          lorem ipsum dolor sit amet consectetur
        </MarketingSectionDescription>
      </MarketingSectionHeader>
      <MarketingSectionContent>
        <div className="flex w-fit mx-auto space-x-2 items-center mb-6">
          <Switch id="annual" checked={annual} onCheckedChange={setAnnual} />
          <Label htmlFor="annual" className="text-base">
            年払い<Badge>10% お得</Badge>
          </Label>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  人気
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-3xl font-bold">
                    {annual ? plan.priceAnnual : plan.price}
                  </span>
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
                  {plan.price === "お問い合わせ" ? "お問い合わせ" : "はじめる"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
