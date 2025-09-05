import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MarketingSection, {
  MarketingSectionTitle,
  MarketingSectionContent,
  MarketingSectionDescription,
  MarketingSectionHeader,
} from "../marketing-section/marketing-section";

export default function FaqSection() {
  const faqs = [
    {
      question: "サービスの利用開始にはどのくらい時間がかかりますか？",
      answer:
        "アカウント作成から実際の利用開始まで、わずか5分程度で完了します。複雑な設定は不要で、すぐにサービスをお試しいただけます。",
    },
    {
      question: "無料プランでも十分な機能を利用できますか？",
      answer:
        "はい、無料プランでも基本的な機能をすべてご利用いただけます。月間100リクエストまで無料でお使いいただけるため、まずはお試しください。",
    },
    {
      question: "データのセキュリティは大丈夫ですか？",
      answer:
        "エンタープライズグレードのセキュリティを採用しており、データは暗号化されて安全に保護されます。SOC2準拠の厳格な基準を満たしています。",
    },
    {
      question: "プランの変更やキャンセルはいつでも可能ですか？",
      answer:
        "はい、いつでもプランの変更やキャンセルが可能です。アップグレードは即座に反映され、ダウングレードは次の請求サイクルから適用されます。",
    },
    {
      question: "技術的なサポートは受けられますか？",
      answer:
        "全プランでメールサポートを提供しており、プロフェッショナルプラン以上では優先サポートをご利用いただけます。平均応答時間は24時間以内です。",
    },
  ];

  return (
    <MarketingSection id="faq">
      <MarketingSectionHeader>
        <MarketingSectionTitle>よくある質問</MarketingSectionTitle>
        <MarketingSectionDescription>
          lorem ipsum dolor sit amet consectetur
        </MarketingSectionDescription>
      </MarketingSectionHeader>
      <MarketingSectionContent>
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MarketingSectionContent>
    </MarketingSection>
  );
}
