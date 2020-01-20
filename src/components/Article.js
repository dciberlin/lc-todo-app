import React from 'react';

const Article = props => {
  const article = props.article;
  const friend =
    'https://media0.giphy.com/media/OI8TsOa9KFAPu/giphy.gif?cid=790b76116ff1b97ce66612fdfbc17f90abfb14f8d9ec70c8&rid=giphy.gif';

  function openArticle(url) {
    window.open(url, '_blank');
  }

  return (
    <div className="article" onClick={() => openArticle(article.url)}>
      <div className="img">
        {article.urlToImage ? (
          <img src={article.urlToImage}></img>
        ) : (
          <img src={friend}></img>
        )}
      </div>
      <div className="info">
        <p className="title">{article.title}</p>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default Article;
