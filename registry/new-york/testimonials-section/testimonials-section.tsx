import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MarketingSection, {
  MarketingSectionHeader,
  MarketingSectionDescription,
  MarketingSectionTitle,
  MarketingSectionContent,
} from "../marketing-section/marketing-section";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "田中 太郎",
      role: "株式会社ABC 代表取締役",
      content:
        "導入後、業務効率が3倍向上しました。特に自動化機能が素晴らしく、チーム全体の生産性が大幅に改善されています。",
      avatar: "TT",
      rating: 5,
      image: "https://api.dicebear.com/9.x/thumbs/svg?seed=1",
    },
    {
      name: "佐藤 花子",
      role: "XYZ企業 マーケティング部長",
      content:
        "使いやすさと機能性のバランスが完璧です。複雑な作業も直感的に操作でき、チームメンバー全員がすぐに使いこなせました。",
      avatar: "SH",
      rating: 5,
      image: "https://api.dicebear.com/9.x/thumbs/svg?seed=2",
    },
    {
      name: "山田 次郎",
      role: "DEF株式会社 CTO",
      content:
        "セキュリティ面での安心感と、拡張性の高さが決め手でした。エンタープライズレベルの要求にも十分応えられる品質です。",
      avatar: "YJ",
      rating: 5,
      image: "https://api.dicebear.com/9.x/thumbs/svg?seed=3",
    },
  ];

  return (
    <MarketingSection id="testimonials">
      <MarketingSectionHeader>
        <MarketingSectionTitle>ユーザーの声</MarketingSectionTitle>
        <MarketingSectionDescription>
          ユーザーからの声をご紹介します
        </MarketingSectionDescription>
      </MarketingSectionHeader>
      <MarketingSectionContent>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="flex-1">
                <Quote className="text-muted-foreground size-10 mb-6" />

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Avatar className="mr-4 size-10">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
