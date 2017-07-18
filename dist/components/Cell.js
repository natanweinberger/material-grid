'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/material-cell.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenerateCellClassNames = function GenerateCellClassNames(props) {
  var classes = 'mdl-cell';
  if (props.col) {
    classes += ' mdl-cell--' + props.col + '-col';
  }
  if (props.desktop) {
    classes += ' mdl-cell--' + props.desktop + '-col-desktop';
  }
  if (props.tablet) {
    classes += ' mdl-cell--' + props.tablet + '-col-tablet';
  }
  if (props.phone) {
    classes += ' mdl-cell--' + props.phone + '-col-phone';
  }
  if (props.offset) {
    classes += ' mdl-cell--' + props.offset + '-offset';
  }
  if (props.desktopOffset) {
    classes += ' mdl-cell--' + props.desktopOffset + '-offset-desktop';
  }
  if (props.tabletOffset) {
    classes += ' mdl-cell--' + props.tabletOffset + '-offset-tablet';
  }
  if (props.phoneOffset) {
    classes += ' mdl-cell--' + props.phoneOffset + '-offset-phone';
  }
  if (props.hideDesktop) {
    classes += ' mdl-cell--hide-desktop';
  }
  if (props.hideTablet) {
    classes += ' mdl-cell--hide-tablet';
  }
  if (props.hidePhone) {
    classes += ' mdl-cell--hide-phone';
  }
  if (props.top) {
    classes += ' mdl-cell--top';
  }
  if (props.middle) {
    classes += ' mdl-cell--middle';
  }
  if (props.bottom) {
    classes += ' mdl-cell--bottom';
  }
  if (props.customClass) {
    classes += ' ' + props.customClass;
  }
  return classes;
};

var Cell = function Cell(props) {
  return _react2.default.createElement(
    'div',
    {
      className: GenerateCellClassNames(props),
      style: props.style && props.style
    },
    props.children
  );
};

Cell.propTypes = {
  col: _react2.default.PropTypes.number.isRequired,
  desktop: _react2.default.PropTypes.number,
  tablet: _react2.default.PropTypes.number,
  phone: _react2.default.PropTypes.number,
  offset: _react2.default.PropTypes.number,
  desktopOffset: _react2.default.PropTypes.number,
  tabletOffset: _react2.default.PropTypes.number,
  phoneOffset: _react2.default.PropTypes.number,
  hideDesktop: _react2.default.PropTypes.bool,
  hideTablet: _react2.default.PropTypes.bool,
  hidePhone: _react2.default.PropTypes.bool,
  top: _react2.default.PropTypes.bool,
  middle: _react2.default.PropTypes.bool,
  bottom: _react2.default.PropTypes.bool,
  customClass: _react2.default.PropTypes.string
};

exports.default = Cell;