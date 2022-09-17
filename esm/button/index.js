import _extends from "@babel/runtime/helpers/esm/extends";
import React from "react";
import classnames from "classnames";
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
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, style, {
      className: classnames(prefixCls, 'link'),
      target: target
    }), children);
  }

  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled
  }, style, {
    type: htmlType ? htmlType : 'button',
    className: classnames(prefixCls, size || 'middle', type || 'default', shape),
    onClick: handleClick
  }), loading && /*#__PURE__*/React.createElement("span", null), children);
};

export default Button;