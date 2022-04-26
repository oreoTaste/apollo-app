import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LIKE_MOVIE = gql`
    mutation likeMovie($id: Int!) {
        likeMovie(id: $id) @client
    }
`;

export const Poster = ({id, medium_cover_image, title, isLiked}) => {
    const [likeMovie] = useMutation(LIKE_MOVIE, {variables: {id}})
    return (
        <Article key={id}>
            <Link to={`/${id}`}>
                    <Img src={medium_cover_image} alt={title} />
                    <Title>{title}</Title>
            </Link>
            <Button onClick={likeMovie}>{isLiked ? "unlike" : "like"}</Button>
        </Article>
    );
}


const Button = styled.button`
    padding: 5px;
    border-radius: 3px;
`;

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