import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as favoritesActions from '../../actions/favoritesActions';

const Search = (props) => {
  const [location, setLocation] = useState('');

  // useEffect(() => {
  //   props.getLocation()
  // },[])

  const filterByLocation = (e) => {
    setLocation(e.target.value);
    props.getLocation(location);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="busca por localidad"
        value={location}
        onChange={filterByLocation}
      />
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.favoriteReducer;
}

export default connect(mapStateToProps, favoritesActions)(Search);
