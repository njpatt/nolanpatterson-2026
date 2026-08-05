declare module "bootstrap" {
  export const Carousel: {
    getOrCreateInstance(element: Element): {
      to(index: number): void;
    };
  };
}
