export interface PokemonInfo {
  name: string;
  weight: Number;
  height: Number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
      ['official-artwork']: {
        front_default: string;
      };
    };
  };
  id: string | undefined;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}
