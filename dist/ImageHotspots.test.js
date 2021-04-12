"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

var _ImageHotspots = _interopRequireDefault(require("./ImageHotspots"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ImageHotspots', function () {
  var container;
  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(function () {
    document.body.removeChild(container);
    container = null;
  });
  it('shows loading', function () {
    (0, _testUtils.act)(function () {
      _reactDom["default"].render(_react["default"].createElement(_ImageHotspots["default"], null), container);
    });
    var image = container.querySelector('img');
    expect((0, _testUtils.isDOMComponent)(image)).toBe(false);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZUhvdHNwb3RzLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJjb250YWluZXIiLCJiZWZvcmVFYWNoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiYWZ0ZXJFYWNoIiwicmVtb3ZlQ2hpbGQiLCJpdCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiZXhwZWN0IiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBQSxRQUFRLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQzlCLE1BQUlDLFNBQUo7QUFFQUMsRUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZkQsSUFBQUEsU0FBUyxHQUFHRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRCxJQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBY0MsV0FBZCxDQUEwQkwsU0FBMUI7QUFDRCxHQUhTLENBQVY7QUFLQU0sRUFBQUEsU0FBUyxDQUFDLFlBQU07QUFDZEosSUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNHLFdBQWQsQ0FBMEJQLFNBQTFCO0FBQ0FBLElBQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0QsR0FIUSxDQUFUO0FBS0FRLEVBQUFBLEVBQUUsQ0FBQyxlQUFELEVBQWtCLFlBQU07QUFDeEIsd0JBQUksWUFBTTtBQUNSQywyQkFBU0MsTUFBVCxDQUFnQixnQ0FBQyx5QkFBRCxPQUFoQixFQUFtQ1YsU0FBbkM7QUFDRCxLQUZEO0FBR0EsUUFBTVcsS0FBSyxHQUFHWCxTQUFTLENBQUNZLGFBQVYsQ0FBd0IsS0FBeEIsQ0FBZDtBQUNBQyxJQUFBQSxNQUFNLENBQUMsK0JBQWVGLEtBQWYsQ0FBRCxDQUFOLENBQThCRyxJQUE5QixDQUFtQyxLQUFuQztBQUNELEdBTkMsQ0FBRjtBQU9ELENBcEJPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgYWN0LCBpc0RPTUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LWRvbS90ZXN0LXV0aWxzJ1xuaW1wb3J0IEltYWdlSG90c3BvdHMgZnJvbSAnLi9JbWFnZUhvdHNwb3RzJ1xuXG5kZXNjcmliZSgnSW1hZ2VIb3RzcG90cycsICgpID0+IHtcbiAgbGV0IGNvbnRhaW5lclxuXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG4gIH0pXG5cbiAgYWZ0ZXJFYWNoKCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcilcbiAgICBjb250YWluZXIgPSBudWxsXG4gIH0pXG5cbiAgaXQoJ3Nob3dzIGxvYWRpbmcnLCAoKSA9PiB7XG4gICAgYWN0KCgpID0+IHtcbiAgICAgIFJlYWN0RE9NLnJlbmRlcig8SW1hZ2VIb3RzcG90cyAvPiwgY29udGFpbmVyKVxuICAgIH0pXG4gICAgY29uc3QgaW1hZ2UgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignaW1nJylcbiAgICBleHBlY3QoaXNET01Db21wb25lbnQoaW1hZ2UpKS50b0JlKGZhbHNlKVxuICB9KVxufSlcbiJdfQ==