import { Button } from "@/components/ui/button";
import MarketingSection, {
  MarketingSectionContent,
} from "../marketing-section/marketing-section";

export default function HeroSection() {
  return (
    <MarketingSection>
      <div className="py-10 px-4 lg:py-20 lg:px-8 text-center">
        <MarketingSectionContent>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl/normal font-bold mb-6">
              次世代のソリューションで
              <br />
              ビジネスを加速させる
            </h1>
            <p className="text-xl/relaxed mb-8 max-w-2xl mx-auto ">
              革新的な技術とユーザー体験で、あなたのビジネスを次のレベルへ。
              今すぐ始めて、競合他社に差をつけましょう。
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">無料で始める</Button>
              <Button variant="outline" size="lg">
                詳細を見る
              </Button>
            </div>
          </div>
        </MarketingSectionContent>
      </div>
    </MarketingSection>
  );
}
