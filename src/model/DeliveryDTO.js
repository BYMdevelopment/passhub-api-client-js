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
    define(['ApiClient', 'model/Address'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'));
  } else {
    // Browser globals (root is window)
    if (!root.PassHubApi) {
      root.PassHubApi = {};
    }
    root.PassHubApi.DeliveryDTO = factory(root.PassHubApi.ApiClient, root.PassHubApi.Address);
  }
}(this, function(ApiClient, Address) {
  'use strict';




  /**
   * The DeliveryDTO model module.
   * @module model/DeliveryDTO
   * @version 1.1
   */

  /**
   * Constructs a new <code>DeliveryDTO</code>.
   * @alias module:model/DeliveryDTO
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DeliveryDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryDTO} obj Optional instance to populate.
   * @return {module:model/DeliveryDTO} The populated <code>DeliveryDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('carrier')) {
        obj['carrier'] = ApiClient.convertToType(data['carrier'], 'String');
      }
      if (data.hasOwnProperty('cost')) {
        obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('trackingNumber')) {
        obj['trackingNumber'] = ApiClient.convertToType(data['trackingNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/DeliveryDTO.CarrierEnum} carrier
   */
  exports.prototype['carrier'] = undefined;
  /**
   * @member {Number} cost
   */
  exports.prototype['cost'] = undefined;
  /**
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/DeliveryDTO.ModeEnum} mode
   */
  exports.prototype['mode'] = undefined;
  /**
   * @member {module:model/DeliveryDTO.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} trackingNumber
   */
  exports.prototype['trackingNumber'] = undefined;


  /**
   * Allowed values for the <code>carrier</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CarrierEnum = {
    /**
     * value: "FEDEX"
     * @const
     */
    "FEDEX": "FEDEX"  };

  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "FEDEX_GROUND"
     * @const
     */
    "FEDEX_GROUND": "FEDEX_GROUND",
    /**
     * value: "FEDEX_2_DAY"
     * @const
     */
    "FEDEX_2_DAY": "FEDEX_2_DAY",
    /**
     * value: "FEDEX_2_DAY_AM"
     * @const
     */
    "FEDEX_2_DAY_AM": "FEDEX_2_DAY_AM",
    /**
     * value: "FEDEX_EXPRESS_SAVER"
     * @const
     */
    "FEDEX_EXPRESS_SAVER": "FEDEX_EXPRESS_SAVER",
    /**
     * value: "STANDARD_OVERNIGHT"
     * @const
     */
    "STANDARD_OVERNIGHT": "STANDARD_OVERNIGHT",
    /**
     * value: "FIRST_OVERNIGHT"
     * @const
     */
    "FIRST_OVERNIGHT": "FIRST_OVERNIGHT",
    /**
     * value: "PRIORITY_OVERNIGHT"
     * @const
     */
    "PRIORITY_OVERNIGHT": "PRIORITY_OVERNIGHT",
    /**
     * value: "INTERNATIONAL_ECONOMY"
     * @const
     */
    "INTERNATIONAL_ECONOMY": "INTERNATIONAL_ECONOMY",
    /**
     * value: "INTERNATIONAL_FIRST"
     * @const
     */
    "INTERNATIONAL_FIRST": "INTERNATIONAL_FIRST",
    /**
     * value: "INTERNATIONAL_PRIORITY"
     * @const
     */
    "INTERNATIONAL_PRIORITY": "INTERNATIONAL_PRIORITY",
    /**
     * value: "GROUND_HOME_DELIVERY"
     * @const
     */
    "GROUND_HOME_DELIVERY": "GROUND_HOME_DELIVERY",
    /**
     * value: "SMART_POST"
     * @const
     */
    "SMART_POST": "SMART_POST"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ASSIGN_REQUIRED"
     * @const
     */
    "ASSIGN_REQUIRED": "ASSIGN_REQUIRED",
    /**
     * value: "SHIPMENT_CREATION"
     * @const
     */
    "SHIPMENT_CREATION": "SHIPMENT_CREATION",
    /**
     * value: "LABEL_PRINTING"
     * @const
     */
    "LABEL_PRINTING": "LABEL_PRINTING",
    /**
     * value: "PICKUP_REQUIRED"
     * @const
     */
    "PICKUP_REQUIRED": "PICKUP_REQUIRED",
    /**
     * value: "PROCESSED"
     * @const
     */
    "PROCESSED": "PROCESSED"  };


  return exports;
}));


