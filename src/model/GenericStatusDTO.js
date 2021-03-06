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
    root.PassHubApi.GenericStatusDTO = factory(root.PassHubApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GenericStatusDTO model module.
   * @module model/GenericStatusDTO
   * @version 1.1
   */

  /**
   * Constructs a new <code>GenericStatusDTO</code>.
   * @alias module:model/GenericStatusDTO
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>GenericStatusDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenericStatusDTO} obj Optional instance to populate.
   * @return {module:model/GenericStatusDTO} The populated <code>GenericStatusDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {module:model/GenericStatusDTO.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"  };


  return exports;
}));


