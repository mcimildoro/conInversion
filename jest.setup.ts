import "@testing-library/jest-dom";
jest.mock('lucide-react', () => ({
    ChevronLeft: () => "ChevronLeft",
    ChevronRight: () => "ChevronRight",
  }));
  

  global.IntersectionObserver = class {
    root: Element | null = null;
    rootMargin: string = '';
    thresholds: ReadonlyArray<number> = [];
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
    takeRecords() {
      return [];
    }
  };
  