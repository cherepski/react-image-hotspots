"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ImageHotspots = _interopRequireDefault(require("./ImageHotspots"));

var _landscape = _interopRequireDefault(require("./landscape.jpg"));

var _portrait = _interopRequireDefault(require("./portrait.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stories = (0, _react2.storiesOf)('ImagesHotspots', module);
stories.addDecorator(_addonKnobs.withKnobs);
var hotspots = [{
  x: 10,
  y: 20,
  content: _react["default"].createElement("span", {
    style: {
      padding: 10
    }
  }, "Hotspot1")
}, {
  x: 50,
  y: 10,
  content: _react["default"].createElement("span", {
    style: {
      padding: 10
    }
  }, "Hotspot2")
}, {
  x: 30,
  y: 40,
  content: _react["default"].createElement("span", {
    style: {
      padding: 10
    }
  }, "Hotspot3")
}, {
  x: 50,
  y: 60,
  content: _react["default"].createElement("span", {
    style: {
      padding: 10
    }
  }, "Hotspot4")
}];
stories.add('default', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '100%',
      height: '90vh'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _landscape["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    hideFullscreenControl: (0, _addonKnobs["boolean"])('Hide fullscreen control', false),
    hideZoomControls: (0, _addonKnobs["boolean"])('Hide zoom controls', false),
    hotspots: (0, _addonKnobs.object)('Hotspots', hotspots),
    hideMinimap: (0, _addonKnobs["boolean"])('Hide Minimap', false)
  }));
});
stories.add('landscape image & landscape container', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '450px',
      height: '300px'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _landscape["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    hideFullscreenControl: (0, _addonKnobs["boolean"])('Hide fullscreen control', false),
    hideZoomControls: (0, _addonKnobs["boolean"])('Hide zoom controls', false),
    hotspots: (0, _addonKnobs.object)('Hotspots', hotspots),
    hideMinimap: (0, _addonKnobs["boolean"])('Hide Minimap', false)
  }));
});
stories.add('landscape image & portrait container', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '250px',
      height: '300px'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _landscape["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    hideFullscreenControl: (0, _addonKnobs["boolean"])('Hide fullscreen control', false),
    hideZoomControls: (0, _addonKnobs["boolean"])('Hide zoom controls', false),
    hotspots: (0, _addonKnobs.object)('Hotspots', hotspots),
    hideMinimap: (0, _addonKnobs["boolean"])('Hide Minimap', false)
  }));
});
stories.add('portrait image & landscape container', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '450px',
      height: '300px'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _portrait["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    hideFullscreenControl: (0, _addonKnobs["boolean"])('Hide fullscreen control', false),
    hideZoomControls: (0, _addonKnobs["boolean"])('Hide zoom controls', false),
    hotspots: (0, _addonKnobs.object)('Hotspots', hotspots),
    hideMinimap: (0, _addonKnobs["boolean"])('Hide Minimap', false)
  }));
});
stories.add('portrait image & portrait container', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '225px',
      height: '300px'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _portrait["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    hideFullscreenControl: (0, _addonKnobs["boolean"])('Hide fullscreen control', false),
    hideZoomControls: (0, _addonKnobs["boolean"])('Hide zoom controls', false),
    hotspots: (0, _addonKnobs.object)('Hotspots', hotspots),
    hideMinimap: (0, _addonKnobs["boolean"])('Hide Minimap', false)
  }));
});
stories.add('custom background', function () {
  return _react["default"].createElement("div", {
    style: {
      width: '250px',
      height: '300px'
    }
  }, _react["default"].createElement(_ImageHotspots["default"], {
    src: (0, _addonKnobs.text)('Image', _landscape["default"]),
    alt: (0, _addonKnobs.text)('Alternate text', 'Sample image'),
    background: (0, _addonKnobs.text)('Background', 'lightGray')
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnZUhvdHNwb3RzLnN0b3JpZXMuanMiXSwibmFtZXMiOlsic3RvcmllcyIsIm1vZHVsZSIsImFkZERlY29yYXRvciIsIndpdGhLbm9icyIsImhvdHNwb3RzIiwieCIsInkiLCJjb250ZW50IiwicGFkZGluZyIsImFkZCIsIndpZHRoIiwiaGVpZ2h0IiwibGFuZHNjYXBlIiwicG9ydHJhaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsdUJBQVUsZ0JBQVYsRUFBNEJDLE1BQTVCLENBQWhCO0FBRUFELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQkMscUJBQXJCO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFBRUMsRUFBQUEsQ0FBQyxFQUFFLEVBQUw7QUFBU0MsRUFBQUEsQ0FBQyxFQUFFLEVBQVo7QUFBZ0JDLEVBQUFBLE9BQU8sRUFBRTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQWI7QUFBekIsQ0FEZSxFQUVmO0FBQUVILEVBQUFBLENBQUMsRUFBRSxFQUFMO0FBQVNDLEVBQUFBLENBQUMsRUFBRSxFQUFaO0FBQWdCQyxFQUFBQSxPQUFPLEVBQUU7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFiO0FBQXpCLENBRmUsRUFHZjtBQUFFSCxFQUFBQSxDQUFDLEVBQUUsRUFBTDtBQUFTQyxFQUFBQSxDQUFDLEVBQUUsRUFBWjtBQUFnQkMsRUFBQUEsT0FBTyxFQUFFO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBYjtBQUF6QixDQUhlLEVBSWY7QUFBRUgsRUFBQUEsQ0FBQyxFQUFFLEVBQUw7QUFBU0MsRUFBQUEsQ0FBQyxFQUFFLEVBQVo7QUFBZ0JDLEVBQUFBLE9BQU8sRUFBRTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBQWI7QUFBekIsQ0FKZSxDQUFqQjtBQU9BUixPQUFPLENBQUNTLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLFlBQU07QUFDM0IsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxNQUFUO0FBQWlCQyxNQUFBQSxNQUFNLEVBQUU7QUFBekI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjQyxxQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEscUJBQXFCLEVBQUUsNEJBQVEseUJBQVIsRUFBbUMsS0FBbkMsQ0FIekI7QUFJRSxJQUFBLGdCQUFnQixFQUFFLDRCQUFRLG9CQUFSLEVBQThCLEtBQTlCLENBSnBCO0FBS0UsSUFBQSxRQUFRLEVBQUUsd0JBQU8sVUFBUCxFQUFtQlIsUUFBbkIsQ0FMWjtBQU1FLElBQUEsV0FBVyxFQUFFLDRCQUFRLGNBQVIsRUFBd0IsS0FBeEI7QUFOZixJQURGLENBREY7QUFZRCxDQWJEO0FBZUFKLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLHVDQUFaLEVBQXFELFlBQU07QUFDekQsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjQyxxQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEscUJBQXFCLEVBQUUsNEJBQVEseUJBQVIsRUFBbUMsS0FBbkMsQ0FIekI7QUFJRSxJQUFBLGdCQUFnQixFQUFFLDRCQUFRLG9CQUFSLEVBQThCLEtBQTlCLENBSnBCO0FBS0UsSUFBQSxRQUFRLEVBQUUsd0JBQU8sVUFBUCxFQUFtQlIsUUFBbkIsQ0FMWjtBQU1FLElBQUEsV0FBVyxFQUFFLDRCQUFRLGNBQVIsRUFBd0IsS0FBeEI7QUFOZixJQURGLENBREY7QUFZRCxDQWJEO0FBZUFKLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLHNDQUFaLEVBQW9ELFlBQU07QUFDeEQsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjQyxxQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEscUJBQXFCLEVBQUUsNEJBQVEseUJBQVIsRUFBbUMsS0FBbkMsQ0FIekI7QUFJRSxJQUFBLGdCQUFnQixFQUFFLDRCQUFRLG9CQUFSLEVBQThCLEtBQTlCLENBSnBCO0FBS0UsSUFBQSxRQUFRLEVBQUUsd0JBQU8sVUFBUCxFQUFtQlIsUUFBbkIsQ0FMWjtBQU1FLElBQUEsV0FBVyxFQUFFLDRCQUFRLGNBQVIsRUFBd0IsS0FBeEI7QUFOZixJQURGLENBREY7QUFZRCxDQWJEO0FBZUFKLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLHNDQUFaLEVBQW9ELFlBQU07QUFDeEQsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjRSxvQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEscUJBQXFCLEVBQUUsNEJBQVEseUJBQVIsRUFBbUMsS0FBbkMsQ0FIekI7QUFJRSxJQUFBLGdCQUFnQixFQUFFLDRCQUFRLG9CQUFSLEVBQThCLEtBQTlCLENBSnBCO0FBS0UsSUFBQSxRQUFRLEVBQUUsd0JBQU8sVUFBUCxFQUFtQlQsUUFBbkIsQ0FMWjtBQU1FLElBQUEsV0FBVyxFQUFFLDRCQUFRLGNBQVIsRUFBd0IsS0FBeEI7QUFOZixJQURGLENBREY7QUFZRCxDQWJEO0FBZUFKLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLHFDQUFaLEVBQW1ELFlBQU07QUFDdkQsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjRSxvQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEscUJBQXFCLEVBQUUsNEJBQVEseUJBQVIsRUFBbUMsS0FBbkMsQ0FIekI7QUFJRSxJQUFBLGdCQUFnQixFQUFFLDRCQUFRLG9CQUFSLEVBQThCLEtBQTlCLENBSnBCO0FBS0UsSUFBQSxRQUFRLEVBQUUsd0JBQU8sVUFBUCxFQUFtQlQsUUFBbkIsQ0FMWjtBQU1FLElBQUEsV0FBVyxFQUFFLDRCQUFRLGNBQVIsRUFBd0IsS0FBeEI7QUFOZixJQURGLENBREY7QUFZRCxDQWJEO0FBZUFKLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLG1CQUFaLEVBQWlDLFlBQU07QUFDckMsU0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCQyxNQUFBQSxNQUFNLEVBQUU7QUFBMUI7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUsc0JBQUssT0FBTCxFQUFjQyxxQkFBZCxDQURQO0FBRUUsSUFBQSxHQUFHLEVBQUUsc0JBQUssZ0JBQUwsRUFBdUIsY0FBdkIsQ0FGUDtBQUdFLElBQUEsVUFBVSxFQUFFLHNCQUFLLFlBQUwsRUFBbUIsV0FBbkI7QUFIZCxJQURGLENBREY7QUFTRCxDQVZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdCdcbmltcG9ydCB7IHdpdGhLbm9icywgdGV4dCwgb2JqZWN0LCBib29sZWFuIH0gZnJvbSAnQHN0b3J5Ym9vay9hZGRvbi1rbm9icydcbmltcG9ydCBJbWFnZUhvdHNwb3RzIGZyb20gJy4vSW1hZ2VIb3RzcG90cydcbmltcG9ydCBsYW5kc2NhcGUgZnJvbSAnLi9sYW5kc2NhcGUuanBnJ1xuaW1wb3J0IHBvcnRyYWl0IGZyb20gJy4vcG9ydHJhaXQuanBnJ1xuXG5jb25zdCBzdG9yaWVzID0gc3Rvcmllc09mKCdJbWFnZXNIb3RzcG90cycsIG1vZHVsZSlcblxuc3Rvcmllcy5hZGREZWNvcmF0b3Iod2l0aEtub2JzKVxuXG5jb25zdCBob3RzcG90cyA9IFtcbiAgeyB4OiAxMCwgeTogMjAsIGNvbnRlbnQ6IDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PkhvdHNwb3QxPC9zcGFuPiB9LFxuICB7IHg6IDUwLCB5OiAxMCwgY29udGVudDogPHNwYW4gc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+SG90c3BvdDI8L3NwYW4+IH0sXG4gIHsgeDogMzAsIHk6IDQwLCBjb250ZW50OiA8c3BhbiBzdHlsZT17eyBwYWRkaW5nOiAxMCB9fT5Ib3RzcG90Mzwvc3Bhbj4gfSxcbiAgeyB4OiA1MCwgeTogNjAsIGNvbnRlbnQ6IDxzcGFuIHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PkhvdHNwb3Q0PC9zcGFuPiB9XG5dXG5cbnN0b3JpZXMuYWRkKCdkZWZhdWx0JywgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnOTB2aCcgfX0+XG4gICAgICA8SW1hZ2VIb3RzcG90c1xuICAgICAgICBzcmM9e3RleHQoJ0ltYWdlJywgbGFuZHNjYXBlKX1cbiAgICAgICAgYWx0PXt0ZXh0KCdBbHRlcm5hdGUgdGV4dCcsICdTYW1wbGUgaW1hZ2UnKX1cbiAgICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sPXtib29sZWFuKCdIaWRlIGZ1bGxzY3JlZW4gY29udHJvbCcsIGZhbHNlKX1cbiAgICAgICAgaGlkZVpvb21Db250cm9scz17Ym9vbGVhbignSGlkZSB6b29tIGNvbnRyb2xzJywgZmFsc2UpfVxuICAgICAgICBob3RzcG90cz17b2JqZWN0KCdIb3RzcG90cycsIGhvdHNwb3RzKX1cbiAgICAgICAgaGlkZU1pbmltYXA9e2Jvb2xlYW4oJ0hpZGUgTWluaW1hcCcsIGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cbnN0b3JpZXMuYWRkKCdsYW5kc2NhcGUgaW1hZ2UgJiBsYW5kc2NhcGUgY29udGFpbmVyJywgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc0NTBweCcsIGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgIDxJbWFnZUhvdHNwb3RzXG4gICAgICAgIHNyYz17dGV4dCgnSW1hZ2UnLCBsYW5kc2NhcGUpfVxuICAgICAgICBhbHQ9e3RleHQoJ0FsdGVybmF0ZSB0ZXh0JywgJ1NhbXBsZSBpbWFnZScpfVxuICAgICAgICBoaWRlRnVsbHNjcmVlbkNvbnRyb2w9e2Jvb2xlYW4oJ0hpZGUgZnVsbHNjcmVlbiBjb250cm9sJywgZmFsc2UpfVxuICAgICAgICBoaWRlWm9vbUNvbnRyb2xzPXtib29sZWFuKCdIaWRlIHpvb20gY29udHJvbHMnLCBmYWxzZSl9XG4gICAgICAgIGhvdHNwb3RzPXtvYmplY3QoJ0hvdHNwb3RzJywgaG90c3BvdHMpfVxuICAgICAgICBoaWRlTWluaW1hcD17Ym9vbGVhbignSGlkZSBNaW5pbWFwJywgZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuc3Rvcmllcy5hZGQoJ2xhbmRzY2FwZSBpbWFnZSAmIHBvcnRyYWl0IGNvbnRhaW5lcicsICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjUwcHgnLCBoZWlnaHQ6ICczMDBweCcgfX0+XG4gICAgICA8SW1hZ2VIb3RzcG90c1xuICAgICAgICBzcmM9e3RleHQoJ0ltYWdlJywgbGFuZHNjYXBlKX1cbiAgICAgICAgYWx0PXt0ZXh0KCdBbHRlcm5hdGUgdGV4dCcsICdTYW1wbGUgaW1hZ2UnKX1cbiAgICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sPXtib29sZWFuKCdIaWRlIGZ1bGxzY3JlZW4gY29udHJvbCcsIGZhbHNlKX1cbiAgICAgICAgaGlkZVpvb21Db250cm9scz17Ym9vbGVhbignSGlkZSB6b29tIGNvbnRyb2xzJywgZmFsc2UpfVxuICAgICAgICBob3RzcG90cz17b2JqZWN0KCdIb3RzcG90cycsIGhvdHNwb3RzKX1cbiAgICAgICAgaGlkZU1pbmltYXA9e2Jvb2xlYW4oJ0hpZGUgTWluaW1hcCcsIGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cbnN0b3JpZXMuYWRkKCdwb3J0cmFpdCBpbWFnZSAmIGxhbmRzY2FwZSBjb250YWluZXInLCAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzQ1MHB4JywgaGVpZ2h0OiAnMzAwcHgnIH19PlxuICAgICAgPEltYWdlSG90c3BvdHNcbiAgICAgICAgc3JjPXt0ZXh0KCdJbWFnZScsIHBvcnRyYWl0KX1cbiAgICAgICAgYWx0PXt0ZXh0KCdBbHRlcm5hdGUgdGV4dCcsICdTYW1wbGUgaW1hZ2UnKX1cbiAgICAgICAgaGlkZUZ1bGxzY3JlZW5Db250cm9sPXtib29sZWFuKCdIaWRlIGZ1bGxzY3JlZW4gY29udHJvbCcsIGZhbHNlKX1cbiAgICAgICAgaGlkZVpvb21Db250cm9scz17Ym9vbGVhbignSGlkZSB6b29tIGNvbnRyb2xzJywgZmFsc2UpfVxuICAgICAgICBob3RzcG90cz17b2JqZWN0KCdIb3RzcG90cycsIGhvdHNwb3RzKX1cbiAgICAgICAgaGlkZU1pbmltYXA9e2Jvb2xlYW4oJ0hpZGUgTWluaW1hcCcsIGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn0pXG5cbnN0b3JpZXMuYWRkKCdwb3J0cmFpdCBpbWFnZSAmIHBvcnRyYWl0IGNvbnRhaW5lcicsICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMjI1cHgnLCBoZWlnaHQ6ICczMDBweCcgfX0+XG4gICAgICA8SW1hZ2VIb3RzcG90c1xuICAgICAgICBzcmM9e3RleHQoJ0ltYWdlJywgcG9ydHJhaXQpfVxuICAgICAgICBhbHQ9e3RleHQoJ0FsdGVybmF0ZSB0ZXh0JywgJ1NhbXBsZSBpbWFnZScpfVxuICAgICAgICBoaWRlRnVsbHNjcmVlbkNvbnRyb2w9e2Jvb2xlYW4oJ0hpZGUgZnVsbHNjcmVlbiBjb250cm9sJywgZmFsc2UpfVxuICAgICAgICBoaWRlWm9vbUNvbnRyb2xzPXtib29sZWFuKCdIaWRlIHpvb20gY29udHJvbHMnLCBmYWxzZSl9XG4gICAgICAgIGhvdHNwb3RzPXtvYmplY3QoJ0hvdHNwb3RzJywgaG90c3BvdHMpfVxuICAgICAgICBoaWRlTWluaW1hcD17Ym9vbGVhbignSGlkZSBNaW5pbWFwJywgZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcblxuc3Rvcmllcy5hZGQoJ2N1c3RvbSBiYWNrZ3JvdW5kJywgKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcyNTBweCcsIGhlaWdodDogJzMwMHB4JyB9fT5cbiAgICAgIDxJbWFnZUhvdHNwb3RzXG4gICAgICAgIHNyYz17dGV4dCgnSW1hZ2UnLCBsYW5kc2NhcGUpfVxuICAgICAgICBhbHQ9e3RleHQoJ0FsdGVybmF0ZSB0ZXh0JywgJ1NhbXBsZSBpbWFnZScpfVxuICAgICAgICBiYWNrZ3JvdW5kPXt0ZXh0KCdCYWNrZ3JvdW5kJywgJ2xpZ2h0R3JheScpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKVxufSlcbiJdfQ==