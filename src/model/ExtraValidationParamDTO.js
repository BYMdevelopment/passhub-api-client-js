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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PassHubApi) {
      root.PassHubApi = {};
    }
    root.PassHubApi.ExtraValidationParamDTO = factory(root.PassHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExtraValidationParamDTO model module.
   * @module model/ExtraValidationParamDTO
   * @version 1.1
   */

  /**
   * Constructs a new <code>ExtraValidationParamDTO</code>.
   * @alias module:model/ExtraValidationParamDTO
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExtraValidationParamDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtraValidationParamDTO} obj Optional instance to populate.
   * @return {module:model/ExtraValidationParamDTO} The populated <code>ExtraValidationParamDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('extra')) {
        obj['extra'] = ApiClient.convertToType(data['extra'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} extra
   */
  exports.prototype['extra'] = undefined;



  return exports;
}));


