import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MarketingSection, {
  MarketingSectionTitle,
  MarketingSectionContent,
} from "../marketing-section/marketing-section";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "田中 太郎",
      role: "株式会社ABC 代表取締役",
      content:
        "導入後、業務効率が3倍向上しました。特に自動化機能が素晴らしく、チーム全体の生産性が大幅に改善されています。",
      avatar: "TT",
      rating: 5,
    },
    {
      name: "佐藤 花子",
      role: "XYZ企業 マーケティング部長",
      content:
        "使いやすさと機能性のバランスが完璧です。複雑な作業も直感的に操作でき、チームメンバー全員がすぐに使いこなせました。",
      avatar: "SH",
      rating: 5,
    },
    {
      name: "山田 次郎",
      role: "DEF株式会社 CTO",
      content:
        "セキュリティ面での安心感と、拡張性の高さが決め手でした。エンタープライズレベルの要求にも十分応えられる品質です。",
      avatar: "YJ",
      rating: 5,
    },
  ];

  return (
    <MarketingSection>
      <div className="py-16 px-8 bg-gray-50">
        <MarketingSectionContent>
          <MarketingSectionTitle>お客様の声</MarketingSectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="mr-4">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </MarketingSectionContent>
      </div>
    </MarketingSection>
  );
}
