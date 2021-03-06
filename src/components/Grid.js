import React from 'react';
import '../css/material-grid.css';

const GenerateGridClassNames = props => {
  let classes = 'mdl-grid';
  if (props.noSpacing) {
    classes += ' mdl-grid--no-spacing';
  }
  if (props.customClass) {
    classes += ' ' + props.customClass;
  }
  return classes;
};

const Grid = props => {
  return (
    <div
      className={GenerateGridClassNames(props)}
      style={props.style && props.style}
    >
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  noSpacing: React.PropTypes.bool,
  customClass: React.PropTypes.string,
};

export default Grid;
