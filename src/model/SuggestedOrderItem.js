/**
 * PassHub API
 * PassHub API documentation
 *
 * OpenAPI spec version: 1.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OrderItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrderItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PassHubApi) {
      root.PassHubApi = {};
    }
    root.PassHubApi.SuggestedOrderItem = factory(root.PassHubApi.ApiClient, root.PassHubApi.OrderItem);
  }
}(this, function(ApiClient, OrderItem) {
  'use strict';




  /**
   * The SuggestedOrderItem model module.
   * @module model/SuggestedOrderItem
   * @version 1.1
   */

  /**
   * Constructs a new <code>SuggestedOrderItem</code>.
   * @alias module:model/SuggestedOrderItem
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SuggestedOrderItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuggestedOrderItem} obj Optional instance to populate.
   * @return {module:model/SuggestedOrderItem} The populated <code>SuggestedOrderItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('orderItem')) {
        obj['orderItem'] = OrderItem.constructFromObject(data['orderItem']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OrderItem} orderItem
   */
  exports.prototype['orderItem'] = undefined;



  return exports;
}));

