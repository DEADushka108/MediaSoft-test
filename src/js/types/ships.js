import PropTypes from 'prop-types';

export const shipDetails = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  isInCart: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}).isRequired;
