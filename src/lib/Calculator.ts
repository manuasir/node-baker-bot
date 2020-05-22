

class Recipe {
  readonly _flour: number
  readonly _water: number
  readonly _yeast: number
  readonly _salt: number

  /**
   * Class constructor
   * @param flour The amount of flour (grams).
   * @param water The amount of water (in %). Example: 0.6
   * @param yeast The amount of yeast (grams).
   * @param salt The amount of salt (grams).
   */
  constructor(
    flour: number,
    water: number,
    yeast: number,
    salt: number
  ) {
    this._flour = flour
    this._water = water
    this._yeast = yeast
    this._salt = salt
  }

  /**
   * Returns the total amount of flour
   */
  get flour(): number {
    return this._flour
  }

  /**
   * Returns the total amount of water
   */
  get water(): number {
    return this._flour*this._water
  }

  /**
   * Returns the total amount of yeast
   */
  get yeast(): number {
    return this._flour*this._yeast
  }

  /**
   * Returns the total amount of salt
   */
  get salt(): number {
    return this._salt
  }

}

export { Recipe }