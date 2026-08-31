// サイト全体で共有する基本情報（ブリーフ 0章）
// 電話番号・メールはリポジトリに含めないため環境変数から読み込みます。
// ローカルは .env、公開時は Cloudflare Pages の環境変数に設定してください。
//   PUBLIC_TEL   … 電話番号（ハイフン込みで可）
//   PUBLIC_EMAIL … メールアドレス
const tel = import.meta.env.PUBLIC_TEL ?? '';
const email = import.meta.env.PUBLIC_EMAIL ?? '';

export const site = {
  name: 'めいじ造園',
  owner: '山口 明治',
  ownerKana: 'やまぐち めいじ',
  tel,
  // tel: リンクは数字（と先頭+）のみにして確実に発信できるようにする
  telLink: `tel:${tel.replace(/[^0-9+]/g, '')}`,
  email,
  base: '埼玉県坂戸市',
  areaShort: '埼玉県全域、東京都練馬区・板橋区',
  qualifications: ['一級造園施工管理技士', '一級造園技能士'],
  description:
    '埼玉県坂戸市の造園・植木屋 めいじ造園。剪定・伐採・除草・芝生管理、庭木一本から承ります。一級造園施工管理技士／一級造園技能士。お見積り無料。',
};

// ページ内アンカーナビ
export const navItems = [
  { href: '#reasons', label: '選ばれる理由' },
  { href: '#services', label: '作業メニュー' },
  { href: '#works', label: '施工事例' },
  { href: '#flow', label: '施工の流れ' },
  { href: '#about', label: '代表あいさつ' },
  { href: '#pricing', label: '料金' },
  { href: '#areas', label: '対応エリア' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#contact', label: 'お問い合わせ' },
] as const;
