import { gql } from "@apollo/client";

export const GET_ANIME_SUGGESTION = gql`query getAnimeAiring($genres:[String], $id:Int) {
    Page(page:1, perPage: 15) {
      media(type:ANIME, sort:POPULARITY_DESC, genre_in:$genres, id_not:$id) {
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