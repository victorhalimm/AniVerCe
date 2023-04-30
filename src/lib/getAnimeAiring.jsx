import { gql } from "@apollo/client";

export const GET_ANIME_AIRING = gql`query getAnimeAiring {
    Page(page:1, perPage: 15) {
      media(type:ANIME, status:RELEASING, sort:POPULARITY_DESC) {
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
  }`