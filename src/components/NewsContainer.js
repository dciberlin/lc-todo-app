import React from 'react';
import Masonry from 'react-masonry-css';
import Article from './Article';
import Spinner from './Spinner';

class NewsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?domains=nationalgeographic.com&apiKey=f8d7869212c24907bc585db6b6d267be`;

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  render() {
    const articleList = this.state.articles.map(el => (
      <Article article={el} key={el.publishedAt}></Article>
    ));

    const myBreakPoints = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
      <Masonry
        breakpointCols={myBreakPoints}
        className="news-container"
        columnClassName="col"
      >
        {articleList.length > 0 ? articleList : <Spinner></Spinner>}
      </Masonry>
    );
  }
}
export default NewsContainer;
