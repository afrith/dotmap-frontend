OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;

/**
 * Namespace: Util.CDNGI
 */
OpenLayers.Util.CDNGI = {};

/**
 * Constant: MISSING_TILE_URL
 * {String} URL of image to display for missing tiles
 */
OpenLayers.Util.CDNGI.MISSING_TILE_URL = "http://openstreetmap.org/openlayers/img/404.png";

/**
 * Property: originalOnImageLoadError
 * {Function} Original onImageLoadError function.
 */
OpenLayers.Util.CDNGI.originalOnImageLoadError = OpenLayers.Util.onImageLoadError;

/**
 * Function: onImageLoadError
 */
OpenLayers.Util.onImageLoadError = function() {
    OpenLayers.Util.CDNGI.originalOnImageLoadError;
};

/**
 * @requires OpenLayers/Layer/XYZ.js
 *
 * Class: OpenLayers.Layer.CDNGI
 *
 * Inherits from:
 *  - <OpenLayers.Layer.XYZ>
 */
OpenLayers.Layer.CDNGI = OpenLayers.Class(OpenLayers.Layer.XYZ, {
    /**
     * Constructor: OpenLayers.Layer.CDNGI
     *
     * Parameters:
     * name - {String}
     * url - {String}
     * options - {Object} Hashtable of extra options to tag onto the layer
     */
    initialize: function(name, options) {
        var url = [
            "http://a.aerial.openstreetmap.org.za/ngi-aerial/${z}/${x}/${y}.jpg",
            "http://b.aerial.openstreetmap.org.za/ngi-aerial/${z}/${x}/${y}.jpg",
            "http://c.aerial.openstreetmap.org.za/ngi-aerial/${z}/${x}/${y}.jpg"
        ];
        options = OpenLayers.Util.extend({
            numZoomLevels: 23,
            transitionEffect: "resize",
            sphericalMercator: true,
            attribution: "<a href=\"http://www.ngi.gov.za/\">CD:NGI Aerial</a>"
        }, options);
        var newArguments = [name, url, options];
        OpenLayers.Layer.XYZ.prototype.initialize.apply(this, newArguments);
    },

    CLASS_NAME: "OpenLayers.Layer.CDNGI"
});
