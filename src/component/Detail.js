import { gql, useQuery } from "@apollo/client"
import { useParams } from "react-router-dom";
import styled from 'styled-components';

const movieDetail = gql`
    query movieDetail($id: Int!) {
        movie(id: $id) {
          id
          title
          rating
          large_cover_image
          summary
          year
          rating
          genres
        },
    }
`

export const Detail = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(movieDetail, { variables: { id } });
    const { movie: { title, rating, large_cover_image, summary, year, genres} } = data || {movie : {}};
    return loading ?
        'Loading...' :
        <div key={id}>
            <Img src={large_cover_image} alt={title}/>
            <Container>
                <Title>{title} ({year})</Title>
                <div>{genres.map(genre => <Span key={genre}>{genre}</Span>)}</div>
                <div>{rating} / 10</div>
                <div>{summary}</div>
            </Container>
        </div>
}

const Container = styled.div`
    padding: 1rem;
`;

const Title = styled.div`
    font-size: 1.15rem;
    font-weight: bold;
`;
const Img = styled.img`
    min-width: 180px;
    max-width: 30vw;
    padding: 1rem;
    float: right;
`;

const Span = styled.span`
//    margin-right: 3px;
    &::after {
        content: " | ";
    }
`;