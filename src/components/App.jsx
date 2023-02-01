import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

const API_KEY = '32386885-8dbf1bc36075d10a6eaf5580b';
const BASE_URL = 'https://pixabay.com/api/';

export const App = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (search === '') {
      return;
    }
    setLoading(true);
    fetch(
      `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(cards => {
        if (cards.hits.length < 1) {
          toast.error('Enter a valid search term!');
        }
        setArticles(prevState => [...prevState, ...cards.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [search, page]);

  const searchBarSubmit = data => {
    setSearch(data);
    setPage(1);
    setArticles([]);
  };

  const clickLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const showModalImg = largeImageURL => {
    setImage({ largeImageURL });
  };

  const closeModalImg = () => {
    setImage('');
  };

  return (
    <AppStyles>
      <Searchbar onSubmitHandler={searchBarSubmit} />
      {articles.length <= 0 && <h1>Enter text</h1>}
      {loading && <Loader />}
      {articles.length > 0 ? (
        <ImageGallery articles={articles} modalBigImg={showModalImg} />
      ) : null}
      {articles.length > 11 && <Button clickLoad={clickLoadMore} />}
      {image && <Modal src={image} close={closeModalImg} />}
      <ToastContainer autoClose={2000} />
    </AppStyles>
  );
};

const AppStyles = styled.div`
  text-align: center;
`;
