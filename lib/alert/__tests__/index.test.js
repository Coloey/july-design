"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("../index"));

describe('<Alert />', function () {
  test("should render default", function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], null, "default")),
        container = _render.container;

    expect(container).toMatchSnapshot();
  });
  test('should render alert with type', function () {
    var kinds = ['info', 'warning', 'positive', 'negative'];

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, kinds.map(function (k) {
      /*#__PURE__*/
      _react["default"].createElement(_index["default"], {
        kind: k,
        key: k
      }, k);
    }))),
        getByText = _render2.getByText;

    kinds.forEach(function (k) {
      expect(getByText(k)).toMatchSnapshot();
    });
  });
});