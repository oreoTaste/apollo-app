import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GET_MOVIES = gql`
    query getMovies {
        movies {
            id
            title
            rating
            medium_cover_image
        }
    }
`
export const Home = () => {
    const { loading, error, data } = useQuery(GET_MOVIES);
    const {movies} = data || {};

    return loading ?
        "Loading..." :
        movies.map(el =>
            <Link key={el.id} to={`/${el.id}`}>
                <Article>
                    <Img src={el.medium_cover_image} alt={movies.title} />
                    <Title>{el.title}</Title>
                </Article>
            </Link>)
}

const Article = styled.article`
    display: inline-block;
    margin: 0.6rem;
    overflow: hidden;
`;
const Img = styled.img`
    width: 230px;
`;
const Title = styled.div`
    width: 230px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    line-height: 1.2em;
    height: 1.2em;
    white-space: nowrap;    
`;