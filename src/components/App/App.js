import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import * as PixabayAPI from '../../services/PixabayAPI';

const mapper = images => {
  return images.map(
    ({
      id,
      webformatURL: previewURL,
      largeImageURL: fullViewURL,
      ...props
    }) => ({
      id,
      previewURL,
      fullViewURL,
      ...props,
    }),
  );
};

export default class App extends Component {
  state = {
    query: '',
    images: [],

    isLoading: false,
    error: null,
  };

  componentDidMount() {}

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState) {}

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.fetchImages();
  };

  fetchImages = () => {
    this.setState({ isLoading: true });

    const { query } = this.state;

    PixabayAPI.fetchImages(query)
      .then(({ data }) => this.setState({ images: mapper(data.hits) }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { query, images, isLoading, error } = this.state;
    return (
      <>
        <Searchbar
          value={query}
          onChange={this.handleInputChange}
          onSearch={this.handleSearch}
        />
        {error && <p>{error.message}</p>}
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery items={images} />}
      </>
    );
  }
}
