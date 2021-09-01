abstract class ProductComponent {
  abstract getPrice(): number;
}

class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...product: ProductComponent[]) {
    this.children.push(...product);
  }

  remove(product: ProductComponent) {
    const index = this.children.indexOf(product);

    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const shirt = new ProductLeaf("Louis Vuitton", 40);
const pants = new ProductLeaf("Levi's", 100);
const sneakers = new ProductLeaf("Nike", 300);

const clothingBox = new ProductComposite();
clothingBox.add(shirt, pants, sneakers);

const tablet = new ProductLeaf("iPad", 1_000);
const kindle = new ProductLeaf("Kindle", 500);

const techBox = new ProductComposite();
techBox.add(tablet, kindle);

const kit = new ProductComposite();

kit.add(clothingBox, techBox);

console.log(kit);
console.log(kit.getPrice());
