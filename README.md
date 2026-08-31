# めいじ造園 ホームページ

埼玉県坂戸市の造園・植木屋「めいじ造園」の公式サイト。
Astro + Tailwind CSS で構築した、1ページ完結の静的サイトです。

## 使い方（ローカル）

```bash
npm install       # 初回のみ
npm run dev       # 開発サーバー（http://localhost:4321）
npm run build     # 本番ビルド（dist/ に出力）
npm run preview   # ビルド結果をローカル確認
```

Node.js 18 以上が必要です（[nodejs.org](https://nodejs.org) からインストール）。

## 内容の直し方

原稿・データはすべて `src/data/` にまとまっています。ここを編集すればページに反映されます。

| ファイル | 内容 |
|---|---|
| `src/data/site.ts` | 屋号・電話・メール・ナビ項目 |
| `src/data/reasons.ts` | 選ばれる4つの理由 |
| `src/data/services.ts` | 作業メニュー |
| `src/data/works.ts` | 施工事例（写真ファイル名・説明・カテゴリ） |
| `src/data/flow.ts` | 施工までの流れ |
| `src/data/faq.ts` | よくあるご質問 |
| `src/data/areas.ts` | 対応エリア（市町村名） |

## 写真の差し替え

プレースホルダー画像を、実際の写真に置き換えてください。

- ヒーロー：`src/assets/images/hero.jpg`
- 代表：`src/assets/images/owner.jpg`
- 施工事例：`src/assets/images/works/` 内の各 `*-before.jpg` / `*-after.jpg`
- SNSシェア画像(OGP)：`public/images/og-image.png`（1200×630px）

同じファイル名で上書きすればそのまま反映されます。別名にする場合は `src/data/works.ts` のファイル名も直してください。
`<Image>` が自動で WebP 化・リサイズ・遅延読み込みを行います。

> **公開前チェック**：他人の家の表札・車のナンバー・住所が写っていないか、
> お客様の写真掲載の許可を得ているか、必ず確認してください。

## お問い合わせフォーム（Formspree）

1. [Formspree](https://formspree.io) に登録し、フォームのエンドポイントURLを取得
2. `.env.example` を `.env` にコピーし、`PUBLIC_FORMSPREE_ENDPOINT` に貼り付け
3. Cloudflare Pages 側でも同名の環境変数を登録

未設定の間は、フォームに設定を促す注意書きが表示されます（電話・メールは有効）。

## 公開手順（Cloudflare Pages）

1. GitHub にリポジトリを作成し push
2. Cloudflare にログイン → Pages → GitHubリポジトリを接続
3. ビルド設定
   - ビルドコマンド：`npm run build`
   - 出力ディレクトリ：`dist`
   - 環境変数：`PUBLIC_FORMSPREE_ENDPOINT` を登録
4. デプロイすると `xxx.pages.dev` のURLが発行されます
5. 独自ドメインを取得したら、Pages のカスタムドメインに設定

以降、GitHub に push するたびに自動でビルド・公開されます。

### 独自ドメインを設定したら

以下2か所のURLを本番ドメインに差し替えてください。

- `astro.config.mjs` の `SITE`
- `public/robots.txt` の `Sitemap:` 行

## 公開後の集客（重要）

1. **Googleビジネスプロフィール** に登録（最優先・無料）
2. 施工事例を月2〜3件のペースで追加（`src/data/works.ts` ＋ 写真）
3. Google Search Console に登録し、`sitemap-index.xml` を送信

## 技術メモ

- 静的サイト（サーバー不要）。JSは最小限（メニュー開閉・事例フィルタ・fade-in のみ）
- モバイルファースト。スマホ下部に「電話する」固定ボタン
- SEO：title / description / OGP / LocalBusiness 構造化データ / sitemap
- アクセシビリティ：キーボード操作、フォーカスリング、`prefers-reduced-motion` 対応
