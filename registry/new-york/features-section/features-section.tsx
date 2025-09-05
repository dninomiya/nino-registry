import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MarketingSection, {
  MarketingSectionDescription,
  MarketingSectionHeader,
  MarketingSectionTitle,
  MarketingSectionContent,
} from "@/registry/new-york/marketing-section/marketing-section";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturesSection() {
  const features = [
    {
      title: "機能タイトル1",
      description:
        "機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明",
    },
    {
      title: "機能タイトル2",
      description:
        "機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明",
    },
    {
      title: "機能タイトル3",
      description:
        "機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明機能の説明",
    },
  ];

  return (
    <MarketingSection id="features">
      <MarketingSectionHeader>
        <MarketingSectionTitle>主な機能</MarketingSectionTitle>
        <MarketingSectionDescription>
          lorem ipsum dolor sit amet consectetur
        </MarketingSectionDescription>
      </MarketingSectionHeader>

      <MarketingSectionContent>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardContent>
                <Skeleton className="aspect-video" />
              </CardContent>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
