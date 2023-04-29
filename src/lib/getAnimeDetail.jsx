import { gql } from "@apollo/client";

export const GET_ANIME_DETAIL = gql`
query getAnimeSlide($id:Int) {
    Page(page:1, perPage: 1) {
      media(type:ANIME, id:$id) {
        id
        coverImage {
          large
        }
        title {
          english
        }
        genres
      bannerImage
      episodes
      season
      seasonYear
      description
      averageScore
      format
      characters(sort:ROLE) {
        nodes {
          id
          name {
            first
            middle
            last
            full
            native
            userPreferred
          }
          image {
            large
            medium
          }
        }
      }
      }
    }
  }`;