// 作業メニュー（ブリーフ 3章）
export interface Service {
  title: string;
  body: string;
  // シンプルなインラインSVGアイコン名
  icon: 'shears' | 'saw' | 'grass' | 'sheet' | 'lawn' | 'spray';
}

export const services: Service[] = [
  {
    title: '剪定',
    body: '松、槙、モミジ等各種常緑樹、落葉樹から生垣まで。木の種類と時期に合わせて方法を変えます。自然風剪定が得意です。',
    icon: 'shears',
  },
  {
    title: '伐採',
    body: '大きくなりすぎた木、お隣に越境してしまっている木の伐採。狭い場所や高い木にも対応します。',
    icon: 'saw',
  },
  {
    title: '除草・草刈り',
    body: '手作業の草むしりから機械での草刈りまで。空き地や空き家の管理も承ります。',
    icon: 'grass',
  },
  {
    title: '防草シート施工',
    body: '草が生えにくい状態を長く保ちます。砂利敷きと組み合わせると効果的です。',
    icon: 'sheet',
  },
  {
    title: '芝刈り・芝張り',
    body: '既存の芝生の芝刈り、目土、エアレーションなどのお手入れから、新しく芝張り施工まで。',
    icon: 'lawn',
  },
  {
    title: '害虫防除・除草剤散布',
    body: 'チャドクガ、モンクロ、松食い虫など、放っておくと人にも木にも害が出る害虫に対応します。',
    icon: 'spray',
  },
];
