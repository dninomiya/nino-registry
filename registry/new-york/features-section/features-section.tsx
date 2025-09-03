import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarketingSection, {
  MarketingSectionTitle,
  MarketingSectionContent,
} from "../marketing-section/marketing-section";

export default function FeaturesSection() {
  const features = [
    {
      title: "高速パフォーマンス",
      description:
        "最新技術により、従来比3倍の処理速度を実現。ユーザー体験を大幅に向上させます。",
      icon: "⚡",
    },
    {
      title: "セキュリティ重視",
      description:
        "エンタープライズグレードのセキュリティで、大切なデータを確実に保護します。",
      icon: "🔒",
    },
    {
      title: "簡単統合",
      description:
        "既存システムとの連携が簡単。数分でセットアップが完了します。",
      icon: "🔗",
    },
  ];

  return (
    <MarketingSection>
      <div className="py-16 px-8">
        <MarketingSectionContent>
          <MarketingSectionTitle>主な機能</MarketingSectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </MarketingSectionContent>
      </div>
    </MarketingSection>
  );
}
