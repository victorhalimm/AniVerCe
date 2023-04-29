import { gql } from "@apollo/client";

export const GET_ANIME_FAVORITE = gql`query getAnimeSlide {
    Page(page:1, perPage: 30) {
      media(type:ANIME, sort:FAVOURITES_DESC) {
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