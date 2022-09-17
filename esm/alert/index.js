import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import classnames from 'classnames';
import { useState } from 'react';
var prefixCls = 'alert';

var Alert = function Alert(props) {
  var style = props.style,
      closable = props.closable,
      closeText = props.closeText,
      message = props.message,
      description = props.description,
      _props$type = props.type,
      type = _props$type === void 0 ? 'info' : _props$type,
      onClose = props.onClose,
      children = props.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleClose = function handleClose() {
    setVisible(false);
    onClose && onClose();
  };

  return visible ? /*#__PURE__*/React.createElement("div", {
    className: classnames(prefixCls, type || "warning"),
    style: _objectSpread({
      opacity: visible ? '1' : '0'
    }, style)
  }, /*#__PURE__*/React.createElement("div", {
    className: "alertMes"
  }, message), description && /*#__PURE__*/React.createElement("div", {
    className: "alertDesc"
  }, description), !!closable && /*#__PURE__*/React.createElement("span", {
    className: "closeBtn",
    onClick: handleClose
  }, closeText ? closeText : 'x'), children) : null;
};

export default Alert;