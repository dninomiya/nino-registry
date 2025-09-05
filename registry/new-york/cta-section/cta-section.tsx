import { Button } from "@/components/ui/button";
import MarketingSection, {
  MarketingSectionContent,
} from "../marketing-section/marketing-section";

export default function CtaSection() {
  return (
    <MarketingSection id="cta">
      <MarketingSectionContent>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl/normal font-bold mb-6">
            今すぐ始めて、
            <br />
            ビジネスを次のレベルへ
          </h2>
          <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            数千社が既に導入し、業務効率を大幅に向上させています。
            あなたも今日から始めませんか？
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            <Button size="lg">無料で始める</Button>
            <Button size="lg" variant="outline">
              デモを見る
            </Button>
          </div>
          <p className="text-sm mt-6 text-muted-foreground">
            クレジットカード不要 • 5分で開始 • いつでもキャンセル可能
          </p>
        </div>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
