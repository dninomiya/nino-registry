import { Button } from "@/components/ui/button";
import MarketingSection, {
  MarketingSectionContent,
} from "../marketing-section/marketing-section";

export default function CtaSection() {
  return (
    <MarketingSection>
      <div className="py-20 px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <MarketingSectionContent>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              今すぐ始めて、
              <br />
              ビジネスを次のレベルへ
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              数千社が既に導入し、業務効率を大幅に向上させています。
              あなたも今日から始めませんか？
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-3 text-blue-700 hover:text-blue-800"
              >
                無料で始める
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-white text-white hover:bg-white hover:text-blue-700"
              >
                デモを見る
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              クレジットカード不要 • 5分で開始 • いつでもキャンセル可能
            </p>
          </div>
        </MarketingSectionContent>
      </div>
    </MarketingSection>
  );
}
