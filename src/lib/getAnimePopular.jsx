import { gql } from "@apollo/client";

export const GET_ANIME_POPULAR = gql`query getAnimeSlide {
    Page(page:1, perPage: 30) {
      media(type:ANIME, sort:POPULARITY_DESC) {
        id
        coverImage {
          large
        }
        title {
          english
        }
        genres
      }
    }
  }
`;
