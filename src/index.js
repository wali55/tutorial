import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
  return (
    <section className='book-list'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
    <img
      src="./images/book-1.webp"
      alt="Dinner Tonight: 100 Simple, Healthy Recipes"
    />
);
const Title = () => {
  return <h2>Dinner Tonight: 100 Simple, Healthy Recipes</h2>;
};
const Author = () => <h4>Alex Snodgrass</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
