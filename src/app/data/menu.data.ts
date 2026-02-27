export interface MenuItem {
  id: number;
  label: string;
  calories: number;
}

export interface MenuSection {
  id: number;
  name: string;
  items: MenuItem[];
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 1,
    name: 'Завтрак',
    items: [
      { id: 1, label: 'Овсянка с ягодами', calories: 220 },
      { id: 2, label: 'Омлет с сыром', calories: 280 },
      { id: 3, label: 'Творог с мёдом', calories: 180 },
      { id: 4, label: 'Блинчики с творогом', calories: 320 },
      { id: 5, label: 'Гранола с йогуртом', calories: 250 },
    ],
  },
  {
    id: 2,
    name: 'Обед',
    items: [
      { id: 1, label: 'Суп куриный', calories: 180 },
      { id: 2, label: 'Салат Цезарь', calories: 350 },
      { id: 3, label: 'Плов с говядиной', calories: 420 },
      { id: 4, label: 'Рыба на гриле', calories: 220 },
      { id: 5, label: 'Паста карбонара', calories: 520 },
    ],
  },
  {
    id: 3,
    name: 'Ужин',
    items: [
      { id: 1, label: 'Запечённая курица', calories: 190 },
      { id: 2, label: 'Овощное рагу', calories: 95 },
      { id: 3, label: 'Творожная запеканка', calories: 165 },
      { id: 4, label: 'Салат с тунцом', calories: 240 },
    ],
  },
  {
    id: 4,
    name: 'Напитки',
    items: [
      { id: 1, label: 'Кофе американо', calories: 5 },
      { id: 2, label: 'Капучино', calories: 120 },
      { id: 3, label: 'Свежевыжатый сок', calories: 110 },
      { id: 4, label: 'Чай', calories: 2 },
      { id: 5, label: 'Морс', calories: 85 },
    ],
  },
];
