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
    define(['ApiClient', 'model/VendorDetailDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VendorDetailDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.PassHubApi) {
      root.PassHubApi = {};
    }
    root.PassHubApi.VendorResourceApi = factory(root.PassHubApi.ApiClient, root.PassHubApi.VendorDetailDTO);
  }
}(this, function(ApiClient, VendorDetailDTO) {
  'use strict';

  /**
   * VendorResource service.
   * @module api/VendorResourceApi
   * @version 1.1
   */

  /**
   * Constructs a new VendorResourceApi. 
   * @alias module:api/VendorResourceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAllVendors operation.
     * @callback module:api/VendorResourceApi~getAllVendorsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/VendorDetailDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getAllVendors
     * Required permissions: CAN_GET_VENDORS
     * @param {Object} opts Optional parameters
     * @param {String} opts.query query text
     * @param {Number} opts.size quantity of listed records on page
     * @param {Number} opts.page listing starts from page value
     * @param {module:model/String} opts.sortBy sort by
     * @param {module:model/String} opts.sortOrder sort order
     * @param {module:api/VendorResourceApi~getAllVendorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/VendorDetailDTO>}
     */
    this.getAllVendors = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'query': opts['query'],
        'size': opts['size'],
        'page': opts['page'],
        'sortBy': opts['sortBy'],
        'sortOrder': opts['sortOrder'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['X-Api-Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [VendorDetailDTO];

      return this.apiClient.callApi(
        '/api/v2/vendors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
