import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";
import { useHistory, useParams } from "react-router";
import { getMovie } from "../../Redux/Card‏/cardAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function MovieScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMovie(params.id));
  }, [dispatch, params.id]);
  // console.log(params.id);
  const Movies = state.moviesCard.movie.movie;

  return state.moviesCard.movie.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan onClick={() => history.goBack()}>Back</NavigatorSpan>
          <NavigatorSpan>/{Movies.title}</NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection img={"https://image.tmdb.org/t/p/w500/"}>
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={"https://image.tmdb.org/t/p/w500/" + Movies.poster_path}
              alt={"movie name"}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {Movies.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {Movies.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={Movies.vote_average * 10} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {Movies.vote_average}
                </InfoText>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {Movies.original_language}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          <ActorCard
            key={1}
            id={"id"}
            name={""}
            img={
              "https://www.themoviedb.org/t/p/w240_and_h266_face/n2hXiC2MABZnZoQKtWLkP73LKWe.jpg"
            }
          />
          <ActorCard
            key={2}
            id={"id"}
            name={""}
            img={
              "https://www.themoviedb.org/t/p/w240_and_h266_face/mp6XaPJTV4R6HCn4KxVp2pR1mhn.jpg"
            }
          />
          <ActorCard
            key={3}
            id={"id"}
            name={""}
            img={
              "https://www.themoviedb.org/t/p/w240_and_h266_face/hhOrGz8Hwum9cKE3IzWKY6Ree4T.jpg"
            }
          />
          <ActorCard
            key={4}
            id={"id"}
            name={""}
            img={
              "https://www.themoviedb.org/t/p/w240_and_h266_face/ehuLul90Mp0zUrjEx3CeSaVoI91.jpg"
            }
          />
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
