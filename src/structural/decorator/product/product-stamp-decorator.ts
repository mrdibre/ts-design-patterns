import { ProductDecorator } from "./product-decorator";

class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return super.getPrice() + 10;
  }

  getName(): string {
    return `${super.getName()} Estampada`;
  }
}

export { ProductStampDecorator };
