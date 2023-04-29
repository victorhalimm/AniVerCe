import { gql } from "@apollo/client";

export const GET_ANIME_SLIDER = gql`query getAnimeSlide {
    Page(page:1, perPage: 15) {
      media(type:ANIME, sort:SCORE_DESC) {
        id
        bannerImage
        title {
          english
        }
        genres
        averageScore
        description
      }
    }
  }
`;
