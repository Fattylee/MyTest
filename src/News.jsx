import React from 'react';

export default (props) => {
// console.log(props.feeds);
  const news = props.feeds.map( feed => {
    return (
      <div key={feed.id}>
        <h3>{feed.title}</h3>
        <p>{feed.feed}</p>
      </div>
    )
  });
  console.log(props.self.state.baba);
  props.self.state.baba = 'weeeww'
  console.log(props.self.state.baba);
  // props.change = 'Tutu';
  return (
    <div>
      {/* <p>{}</p> */}
      <h1>{props.change}</h1>
      {news} 
    </div>
  );
}