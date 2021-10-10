import { ProductProtocol } from "./product-protocol";

class TShirt implements ProductProtocol {
  private name = "Camiseta";
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

export { TShirt };
