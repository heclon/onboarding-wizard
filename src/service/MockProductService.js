let delay = (time) => (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), time));
/* eslint-disable  sonarjs/no-duplicate-string */
export const MockProductService = {
  getProductData() {
    return {
      campaign_footprint: "6cdd359551e86fbac52647fd754659d5",
      abn_code: "bib36pfvm",
      full_name: "SCHRODER 20-YEAR-FIXED RETURN INCOME FUND - WHOLESALE CLASS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image:
        "https://assets.website-files.com/5ec34be63b5a0b2b6dcabdf6/5ecf63294752d37851e63886_schroders-logo-p-500.png",
      price: 320000,
      category: "WHOLESALE",
      quantity: 5,
      tags: ["PROPERTY COMMERCIAL INCOME GROWTH"],
      favourite: false,
      currency_code: "USD",
      currency_symbol: "$",
    };
  },

  getProduct() {
    return Promise.resolve(this.getProductData())
      .then(delay(2000))
      .catch((error) => console.log(error));
  },
};

export const fetchMockedProduct = async () => {
  const product = await MockProductService.getProduct();
  console.log("Called fetchMockedProduct()");
  return product;
};
/* eslint-disable  sonarjs/no-duplicate-string */
