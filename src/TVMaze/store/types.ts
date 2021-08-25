export interface ShowDetails{
    score: number;
    show: {
      id: number;
      url: string;
      name: string;
      language: string;
      genres: string[];
      rating: {
        average: number
      };
      image: {
        medium: string;
        original: string
      }
    }
  }

  export interface APIResponseType{
      ok: boolean
  }

  export interface movieTvList {
      loading: boolean,
      list: ShowDetails[],
      error: string
  }

  export interface TableList {
      listItem: ShowDetails[]
  }