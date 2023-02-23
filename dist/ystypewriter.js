/*!
 * ystypewriter - Simple typewriter plugin.
 * Author: Yusuf Sezer <yusufsezer@mail.com>
 * Version: v1.0.0
 * Url: https://github.com/yusufsefasezer/ysTypeWriter.js
 * License: MIT
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.ysTypeWriter = factory(root);
    }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

    'use strict';

    //
    // Shared Methods
    //

    /**
	 * Check if browser supports required methods.
     * @private
	 * @return {Boolean} Returns true if all required methods are supported.
	 */
    var supports = function () {
        return (
            'querySelector' in document
        );
    };

    /**
	 * Check `obj` is a HTMLElement.
     * @private
     * @param {Object} obj The obj to check.
	 * @returns {Boolean} Returns `true` if `obj` is a HTMLElement, else `false`.
	 */
    var isElement = function (obj) {
        return obj instanceof HTMLElement;
    };

    //
    // Plugin Constructor
    //

    /** 
     * Plugin Object
     * @param {Object | string} element The html element to initialize
     * @constructor
     */
    var Plugin = function (element) {

        //
        // Plugin Variables
        //

        var publicAPIs = {};
        var typeElement = null;
        var typeText = '';
        var typeSpeed = 50;
        var typeIndex = 0;
        var isHTML = false;

        //
        // Plugin Methods
        //

        /**
         * Initialize Plugin.
         * @public
         * @param {Object | string} el HTML element or instance of HTML element
         */
        publicAPIs.init = function (el) {

            // feature test
            if (!supports()) throw 'ysTypeWriter: This browser does not support the required JavaScript methods and browser APIs.'

            // Selectors and variables
            typeElement = (typeof el === 'string') ? document.querySelector(el) : el;

            // Check if a valid element
            if (!isElement(typeElement)) throw new TypeError('ysTypeWriter: Please select a valid element.');

        };

        /**
         * Write HTML
         * @public
         * @param {string} html
         * @param {number} speed
         */
        publicAPIs.writeHTML = function (html, speed) {
            isHTML = true;
            publicAPIs.writeText(html, speed);
        };

        /**
         * Write Text
         * @public
         * @param {string} text
         * @param {number} speed
         */
        publicAPIs.writeText = function (text, speed) {
            typeText = text || typeText;
            typeSpeed = speed || typeSpeed;
            typeWrite();
        };

        /**
         * Start the typing
         * @private
         */
        var typeWrite = function () {

            // skip HTML tags
            if (typeText.substring(typeIndex).charAt(0) === '<' && isHTML) {
                typeIndex = typeText.indexOf('>', typeIndex) + 1;
            }

            // Find new string
            var newStr = typeText.substring(0, ++typeIndex);

            // Write the new string
            if (typeElement.hasAttribute('value') && !isHTML) {
                typeElement.value = newStr;
            } else if (typeElement.innerHTML && isHTML) {
                typeElement.innerHTML = newStr;
            } else {
                typeElement.textContent = newStr;
            }

            // Check if end typing
            if (typeText.length == typeIndex) return;

            setTimeout(typeWrite, typeSpeed);
        };

        //
        // Initialize plugin
        //

        publicAPIs.init(element);

        //
        // Return the public APIs
        //

        return publicAPIs;

    };


    //
    // Return the Plugin
    //

    return Plugin;

});