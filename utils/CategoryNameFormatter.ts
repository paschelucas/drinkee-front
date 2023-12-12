export default {
  format(input: string | number) {
    const nameOptions: Record<string | number, string> = {
      ordinary_drink: "Ordinary drink",
      cocktail: "Cocktail",
      party_drink: "Party drink",
      shot: "Shot",
      soft_drink: "Soft drink",
      coffee_tea: "Coffee/Tea",
      1: "Ordinary drink",
      2: "Cocktail",
      3: "Party drink",
      4: "Shot",
      5: "Soft drink",
      6: "Coffee/Tea",
    };

    return nameOptions[input] || input;
  },
};
