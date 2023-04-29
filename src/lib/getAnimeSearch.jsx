import { gql } from "@apollo/client";

export const GET_ANIME_SEARCH = gql`query getAnimeSlide($search:String) {
    Page(page:1, perPage: 18) {
      media(type:ANIME, search:$search, sort:POPULARITY_DESC, isAdult:false) {
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