import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
    state = {
      isLoading: true,
      movies:[],
    };
    // async와 await 은 짝꿍!
    getMovies = async () => { // async : getMovies() 함수는 시간이 필요해요
      const { 
        data: { 
          data: {movies},
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // await : axios.get()의 실행을 기다려 주세요
      //console.log(movies);
      this.setState({movies, isLoading: false}); //객체의 키와 대입할 변수의 이름이 같다면 축약 가능! {movies: movies} --> {movies}
    }

    componentDidMount() { //영화 데이터 로딩!
      this.getMovies();
    }

    render() {
      const {isLoading, movies} = this.state;
      return (
      <section className="container"> 
      {isLoading ? ( <div className="loader"> <span className="loader__text">'Loading...'</span></div> )
      : ( <div className="movies">
            {movies.map((movie) => (
              <Movie 
                key={movie.id} 
                year={movie.year} 
                title={movie.title}
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              /> 
      ))}
      </div>
      )}
      </section>
      );
    }
}
export default Home;
