import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { getData } from "../../Redux/Card‏/cardAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import HeroImage from "../../Assets/HeroImage.jpg";

function HomeScreen() {
  const [page, setPage] = useState(1);
  const state = useSelector((state) => state.moviesCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(page));
  }, [dispatch, page]);

  const newMovie = state.movies.slice(state.movies.length - 1);

  return state.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection
        // img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
        img={HeroImage}
      >
        {newMovie.map((item) => (
          <InnerHeroSection>
            <Title>{item.title}</Title>
            <Description>{item.overview}</Description>
          </InnerHeroSection>
        ))}
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
          {state.movies.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.title}
              img={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
            />
          ))}
        </CardsContainer>
        <LoadMore
          isLoading={false}
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
