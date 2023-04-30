import { gql } from "@apollo/client";

export const GET_ANIME_TREND = gql`query getAnimeSlide {
    Page(page:1, perPage: 10) {
      media(type:ANIME, sort:TRENDING_DESC) {
        id
        coverImage {
          extraLarge
        }
        title {
          english
        }
        genres
      }
    }
  }`