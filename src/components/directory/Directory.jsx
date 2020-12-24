import React from 'react';
import MenuItem from '../menu-item/MenuItem';

import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { connect } from "react-redux";

import "./Directory.styles.scss";

const Directory = ({ sections }) => {
return(
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
)}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
