# Deprecated

TapListener is no longer support and should be avoided. From [ftlabs/fastclick](https://github.com/ftlabs/fastclick)

> As of late 2015 most mobile browsers - notably Chrome and Safari - no longer have a 300ms touch delay, so fastclick offers no benefit on newer browsers, and risks introducing bugs into your application.

Likewise, TapListener is no longer useful. I recommend using standard `click` event.

See [Chrome dev blog - 300ms tap delay, gone away](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)

# Tap listener

_Listens to taps_

On mobile devices, the `click` event is triggered after a delay. Tap Listener listens for native touch and pointer events to trigger a callback immediately.

Used in [Flickity](http://flickity.metafizzy.co).

``` js
var tapper = new TapListener( element );
tapper.on( 'tap', function( event ) {
  console.log('tap happened');
});
```

Use `TapListener` to extend a class.

``` js
function Widget() {
  //...
}
// inherit Tap Listener
Widget.prototype = new TapListener();
// or
_.extend( Widget.prototype, TapListener.prototype );

var widgy = new Widget( element );
widgy.on( 'tap', function() {...});
```

## Install

Bower: `bower install tap-listener --save`

npm: `npm install tap-listener`

### RequireJS

``` js
requirejs( [ 'path/to/tap-listener' ], function( TapListener ) {
  var tapper = new TapListener( element );
});
```

### Browserify

``` js
var TapListener = require('tap-listener');
var tapper = new TapListener( element );
```

## API

``` js
var tapper = new TapListener( element )
// element {Element} - binds tap events to element

tapper.bindTap( element )
// element {Element} - binds tap events to element

tapper.unbindTap()
// unbinds tap events

tapper.on( eventName, callback )
// eventName {String} - tap, pointerDown, pointerMove, pointerUp, pointerCancel
// callback {Function}

function callback( event, pointer ) {...}
// event {Event} - the original mouseup, touchend, or pointerup event
// pointer {Event} or {Touch} - event object with pageX and pageY

tapper.destroy()
// unbinds tap events
```

---

MIT license

By [Metafizzy](http://metafizzy.co)
