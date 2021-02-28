export interface PokemonInfo {
  name: string;
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
