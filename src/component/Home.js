import { gql, useQuery } from '@apollo/client';
import { Poster } from './Poster';

const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            rating
            medium_cover_image
            isLiked @client
        }
    }
`

export const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    const { movies } = data || {};
    return loading ?
        "Loading..." :
        movies?.map(el =>
            <Poster key={el.id} id={el.id} medium_cover_image={el.medium_cover_image} title={el.title} isLiked={el.isLiked}/>
        )
}