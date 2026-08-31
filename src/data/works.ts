// 施工事例（ブリーフ 3章）
// カテゴリで絞り込み、ビフォーアフターを左右で比較表示する。
// 画像は最初はプレースホルダー。後で public/images/works/ の実写真に差し替えてください。

export type WorkCategory = 'pruning' | 'felling' | 'weeding' | 'lawn';

export interface WorkCategoryDef {
  key: WorkCategory | 'all';
  label: string;
}

export const workCategories: WorkCategoryDef[] = [
  { key: 'all', label: 'すべて' },
  { key: 'pruning', label: '剪定' },
  { key: 'felling', label: '伐採' },
  { key: 'weeding', label: '除草・防草' },
  { key: 'lawn', label: '芝生' },
];

export interface Work {
  id: string;
  category: WorkCategory;
  categoryLabel: string;
  title: string;
  location: string;
  description: string;
  // /public/images/works/ 配下のファイル名（プレースホルダー）
  before: string;
  after: string;
}

export const works: Work[] = [
  {
    id: 'w1',
    category: 'pruning',
    categoryLabel: '剪定',
    title: '松の自然風剪定',
    location: '坂戸市',
    description: '枝が混み合っていた松を、風と光が通るように透かしました。木への負担を抑えた自然な仕上がりです。',
    before: 'work-pruning-1-before.jpg',
    after: 'work-pruning-1-after.jpg',
  },
  {
    id: 'w2',
    category: 'pruning',
    categoryLabel: '剪定',
    title: '生垣の刈り込み',
    location: '鶴ヶ島市',
    description: '伸びて乱れていた生垣を整えました。面をそろえつつ、内部も風が通るようにしています。',
    before: 'work-pruning-2-before.jpg',
    after: 'work-pruning-2-after.jpg',
  },
  {
    id: 'w3',
    category: 'felling',
    categoryLabel: '伐採',
    title: '大きくなりすぎた庭木の伐採',
    location: '川越市',
    description: 'お隣へ越境しかけていた高木を、狭い作業スペースで安全に伐採・処分しました。',
    before: 'work-felling-1-before.jpg',
    after: 'work-felling-1-after.jpg',
  },
  {
    id: 'w4',
    category: 'weeding',
    categoryLabel: '除草・防草',
    title: '除草＋防草シート施工',
    location: '東松山市',
    description: '一面に生えた雑草を刈り取り、防草シートと砂利で草が生えにくい状態にしました。',
    before: 'work-weeding-1-before.jpg',
    after: 'work-weeding-1-after.jpg',
  },
  {
    id: 'w5',
    category: 'lawn',
    categoryLabel: '芝生',
    title: '芝張り工事',
    location: '日高市',
    description: '土がむき出しだったお庭に、新しく芝生を張りました。手入れのしやすい状態でお引き渡しです。',
    before: 'work-lawn-1-before.jpg',
    after: 'work-lawn-1-after.jpg',
  },
  {
    id: 'w6',
    category: 'weeding',
    categoryLabel: '除草・防草',
    title: '空き家の除草管理',
    location: '毛呂山町',
    description: '定期的な管理で、空き家のお庭をすっきりした状態に保っています。',
    before: 'work-weeding-2-before.jpg',
    after: 'work-weeding-2-after.jpg',
  },
];
