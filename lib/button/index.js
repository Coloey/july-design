"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var prefixCls = 'button';

var Button = function Button(props) {
  var style = props.style,
      danger = props.danger,
      disabled = props.disabled,
      href = props.href,
      htmlType = props.htmlType,
      loading = props.loading,
      shape = props.shape,
      size = props.size,
      target = props.target,
      type = props.type,
      onClick = props.onClick,
      children = props.children;

  var handleClick = function handleClick() {
    onClick && onClick();
  };

  if (href && !disabled) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: href
    }, style, {
      className: (0, _classnames.default)(prefixCls, 'link'),
      target: target
    }), children);
  }

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    disabled: disabled
  }, style, {
    type: htmlType ? htmlType : 'button',
    className: (0, _classnames.default)(prefixCls, size || 'middle', type || 'default', shape),
    onClick: handleClick
  }), loading && /*#__PURE__*/_react.default.createElement("span", null), children);
};

var _default = Button;
exports.default = _default;