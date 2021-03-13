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
  id: number | undefined;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  stats: Array<stats>;
  abilities: Array<abilities>;
  species: {
    url: string;
  };
}

interface stats {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface abilities {
  ability: {
    name: string;
  };
  is_hidden: boolean;
}

export interface species {
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: Array<species_text>;
}

interface species_text {
  flavor_text: string;
  version: {
    name: string;
  };
}

export interface evolution_chain {
  chain: {
    evolves_to?: [
      {
        evolves_to?: [
          {
            species?: {
              name: string; //третий в цепи
            };
          },
        ];
        species?: {
          name: string; //второй в цепи
        };
      },
    ];
    species?: {
      name: string; //первый в цепи
    };
  };
}
export interface evolves_to {
  evolves_to: [
    {
      species: {
        name: string;
      };
    },
  ];
}
