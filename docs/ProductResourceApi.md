# PassHubApi.ProductResourceApi

All URIs are relative to *https://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findProductsByVendor**](ProductResourceApi.md#findProductsByVendor) | **GET** /api/v1/products/vendor/{vendorId} | findProductsByVendor
[**getAllProducts**](ProductResourceApi.md#getAllProducts) | **GET** /api/v2/products | getAllProducts


<a name="findProductsByVendor"></a>
# **findProductsByVendor**
> [ProductDTO] findProductsByVendor(vendorId)

findProductsByVendor

Required permissions: CAN_GET_PRODUCTS_BY_VENDOR

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.ProductResourceApi();

var vendorId = 789; // Number | the internal vendor id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProductsByVendor(vendorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vendorId** | **Number**| the internal vendor id | 

### Return type

[**[ProductDTO]**](ProductDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllProducts"></a>
# **getAllProducts**
> [ProductDTO] getAllProducts(opts)

getAllProducts

Required permissions: CAN_GET_PRODUCTS

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.ProductResourceApi();

var opts = { 
  'query': "query_example", // String | query text
  'size': 56, // Number | quantity of listed records on page
  'page': 56, // Number | listing starts from page value
  'sortBy': "sortBy_example", // String | sort by
  'sortOrder': "sortOrder_example", // String | sort order
  'type': "type_example", // String | product type
  'tagFilter': ["tagFilter_example"], // [String] | tagFilter
  'tagFilterMode': "tagFilterMode_example" // String | tagFilterMode
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllProducts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| query text | [optional] 
 **size** | **Number**| quantity of listed records on page | [optional] 
 **page** | **Number**| listing starts from page value | [optional] 
 **sortBy** | **String**| sort by | [optional] 
 **sortOrder** | **String**| sort order | [optional] 
 **type** | **String**| product type | [optional] 
 **tagFilter** | [**[String]**](String.md)| tagFilter | [optional] 
 **tagFilterMode** | **String**| tagFilterMode | [optional] 

### Return type

[**[ProductDTO]**](ProductDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

