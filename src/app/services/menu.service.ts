import { Injectable, signal, computed } from '@angular/core';
import { MENU_SECTIONS, type MenuSection, type MenuItem } from '../data/menu.data';

@Injectable({ providedIn: 'root' })
export class MenuService {
  readonly sections = MENU_SECTIONS;

  private currentSectionId = signal<number>(MENU_SECTIONS[0].id);
  private selectedBySection = signal<Map<number, Set<number>>>(new Map());

  readonly currentSection = computed(() => {
    const id = this.currentSectionId();
    return this.sections.find((s) => s.id === id) ?? this.sections[0];
  });

  readonly currentItems = computed(() => this.currentSection().items);

  readonly currentSectionName = computed(() => this.currentSection().name);

  readonly selectedCount = computed(() => {
    const sectionId = this.currentSectionId();
    const set = this.selectedBySection().get(sectionId);
    return set ? set.size : 0;
  });

  readonly totalCalories = computed(() => {
    const sectionId = this.currentSectionId();
    const set = this.selectedBySection().get(sectionId);
    const section = this.currentSection();
    if (!set) return 0;
    let sum = 0;
    for (const itemId of set) {
      const item = section.items.find((i) => i.id === itemId);
      if (item) sum += item.calories;
    }
    return sum;
  });

  setCurrentSection(sectionId: number): void {
    this.currentSectionId.set(sectionId);
  }

  isSelected(sectionId: number, itemId: number): boolean {
    const set = this.selectedBySection().get(sectionId);
    return set ? set.has(itemId) : false;
  }

  toggle(sectionId: number, itemId: number): void {
    this.selectedBySection.update((map) => {
      const next = new Map(map);
      const set = new Set(next.get(sectionId) ?? []);
      if (set.has(itemId)) set.delete(itemId);
      else set.add(itemId);
      next.set(sectionId, set);
      return next;
    });
  }
}
