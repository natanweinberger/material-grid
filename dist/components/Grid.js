'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/material-grid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenerateGridClassNames = function GenerateGridClassNames(props) {
  var classes = 'mdl-grid';
  if (props.noSpacing) {
    classes += ' mdl-grid--no-spacing';
  }
  if (props.customClass) {
    classes += ' ' + props.customClass;
  }
  return classes;
};

var Grid = function Grid(props) {
  return _react2.default.createElement(
    'div',
    {
      className: GenerateGridClassNames(props),
      style: props.style && props.style
    },
    props.children
  );
};

Grid.propTypes = {
  noSpacing: _react2.default.PropTypes.bool,
  customClass: _react2.default.PropTypes.string
};

exports.default = Grid;