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
    define(['ApiClient', 'model/RechargeProductGroup'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RechargeProductGroup'));
  } else {
    // Browser globals (root is window)
    if (!root.PassHubApi) {
      root.PassHubApi = {};
    }
    root.PassHubApi.RechargePrompt = factory(root.PassHubApi.ApiClient, root.PassHubApi.RechargeProductGroup);
  }
}(this, function(ApiClient, RechargeProductGroup) {
  'use strict';




  /**
   * The RechargePrompt model module.
   * @module model/RechargePrompt
   * @version 1.1
   */

  /**
   * Constructs a new <code>RechargePrompt</code>.
   * @alias module:model/RechargePrompt
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RechargePrompt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RechargePrompt} obj Optional instance to populate.
   * @return {module:model/RechargePrompt} The populated <code>RechargePrompt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [RechargeProductGroup]);
      }
      if (data.hasOwnProperty('validationIds')) {
        obj['validationIds'] = ApiClient.convertToType(data['validationIds'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/RechargeProductGroup>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * @member {Array.<Number>} validationIds
   */
  exports.prototype['validationIds'] = undefined;



  return exports;
}));


