# PassHubApi.VendorResourceApi

All URIs are relative to *https://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllVendors**](VendorResourceApi.md#getAllVendors) | **GET** /api/v2/vendors | getAllVendors


<a name="getAllVendors"></a>
# **getAllVendors**
> [VendorDetailDTO] getAllVendors(opts)

getAllVendors

Required permissions: CAN_GET_VENDORS

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.VendorResourceApi();

var opts = { 
  'query': "query_example", // String | query text
  'size': 56, // Number | quantity of listed records on page
  'page': 56, // Number | listing starts from page value
  'sortBy': "sortBy_example", // String | sort by
  'sortOrder': "sortOrder_example" // String | sort order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllVendors(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| query text | [optional] 
 **size** | **Number**| quantity of listed records on page | [optional] 
 **page** | **Number**| listing starts from page value | [optional] 
 **sortBy** | **String**| sort by | [optional] 
 **sortOrder** | **String**| sort order | [optional] 

### Return type

[**[VendorDetailDTO]**](VendorDetailDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

