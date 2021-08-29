export interface IMealComposite {
  getPrice(): number;
}

export interface IMealBuilder {
  makeMeal(): this;
}
