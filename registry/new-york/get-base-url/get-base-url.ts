/**
 * ベース URL取得する
 *
 * - 末尾にスラッシュはつかない
 * - Vercel ホスティング、カスタムドメインに対応
 *
 * @example
 * 'http://localhost:3000'
 * 'https://foo-git-develop-bar.vercel.app
 * 'https://example.com'
 */
export const getBaseURL = () => {
  const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";
  const url = isProd
    ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  return url
    ? `https://${url}`
    : `http://localhost:${process.env.PORT || 3000}`;
};
