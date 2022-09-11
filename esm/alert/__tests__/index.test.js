import React from "react";
import { render } from "@testing-library/react";
import Alert from "../index";
describe('<Alert />', function () {
  test("should render default", function () {
    var _render = render( /*#__PURE__*/React.createElement(Alert, null, "default")),
        container = _render.container;

    expect(container).toMatchSnapshot();
  });
  test('should render alert with type', function () {
    var kinds = ['info', 'warning', 'positive', 'negative'];

    var _render2 = render( /*#__PURE__*/React.createElement(React.Fragment, null, kinds.map(function (k) {
      /*#__PURE__*/
      React.createElement(Alert, {
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