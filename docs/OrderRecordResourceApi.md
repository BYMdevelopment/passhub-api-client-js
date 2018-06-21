# PassHubApi.OrderRecordResourceApi

All URIs are relative to *https://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderRecord**](OrderRecordResourceApi.md#createOrderRecord) | **POST** /api/v1/orderRecords | createOrderRecord
[**getAllOrderRecords**](OrderRecordResourceApi.md#getAllOrderRecords) | **GET** /api/v2/orderRecords | getAllOrderRecords
[**getOrderRecord**](OrderRecordResourceApi.md#getOrderRecord) | **GET** /api/v1/orderRecords/{id} | getOrderRecord
[**mergeVouchers**](OrderRecordResourceApi.md#mergeVouchers) | **POST** /api/v1/orderRecords/mergeVouchers | mergeVouchers
[**updateOrderRecord**](OrderRecordResourceApi.md#updateOrderRecord) | **PUT** /api/v1/orderRecords | updateOrderRecord


<a name="createOrderRecord"></a>
# **createOrderRecord**
> OrderRecordDTO createOrderRecord(orderRecordDto)

createOrderRecord

1) Cellphone number must be in E.164 format;&lt;br/&gt;2) «PricePaid» is a price for 1 product;&lt;br/&gt;3) Required permissions: CAN_CREATE_ORDER.

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.OrderRecordResourceApi();

var orderRecordDto = new PassHubApi.OrderRecordDTO(); // OrderRecordDTO | the OrderRecord Dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderRecord(orderRecordDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRecordDto** | [**OrderRecordDTO**](OrderRecordDTO.md)| the OrderRecord Dto | 

### Return type

[**OrderRecordDTO**](OrderRecordDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOrderRecords"></a>
# **getAllOrderRecords**
> [OrderRecordExtendDTO] getAllOrderRecords(opts)

getAllOrderRecords

Required permissions: CAN_GET_ORDERS

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.OrderRecordResourceApi();

var opts = { 
  'query': "query_example", // String | query text
  'from': "from_example", // String | Begin the of date range, format: YYYY-MM-DD (e.g. 2016-01-25)
  'till': "till_example", // String | End the of date range, format: YYYY-MM-DD (e.g. 2016-01-25)
  'timeZone': "timeZone_example", // String | A timezone for date/time representation. Example: America/Chicago or EST. If zone is not set, then UTC timezone will be used.
  'deliveryMethod': "deliveryMethod_example", // String | delivery method
  'deliveryStatus': "deliveryStatus_example", // String | status of delivery
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
apiInstance.getAllOrderRecords(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| query text | [optional] 
 **from** | **String**| Begin the of date range, format: YYYY-MM-DD (e.g. 2016-01-25) | [optional] 
 **till** | **String**| End the of date range, format: YYYY-MM-DD (e.g. 2016-01-25) | [optional] 
 **timeZone** | **String**| A timezone for date/time representation. Example: America/Chicago or EST. If zone is not set, then UTC timezone will be used. | [optional] 
 **deliveryMethod** | **String**| delivery method | [optional] 
 **deliveryStatus** | **String**| status of delivery | [optional] 
 **size** | **Number**| quantity of listed records on page | [optional] 
 **page** | **Number**| listing starts from page value | [optional] 
 **sortBy** | **String**| sort by | [optional] 
 **sortOrder** | **String**| sort order | [optional] 

### Return type

[**[OrderRecordExtendDTO]**](OrderRecordExtendDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrderRecord"></a>
# **getOrderRecord**
> OrderRecordExtendDTO getOrderRecord(id)

getOrderRecord

Required permissions: CAN_GET_ORDERS

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.OrderRecordResourceApi();

var id = 789; // Number | the internal id of order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrderRecord(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the internal id of order | 

### Return type

[**OrderRecordExtendDTO**](OrderRecordExtendDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mergeVouchers"></a>
# **mergeVouchers**
> GenericStatusDTO mergeVouchers(orderId, newVoucherId)

mergeVouchers

Replaces voucher IDs of order items with new voucher ID in the specified order. All groups are merged to one &#39;MergedGroup&#39;.&lt;br/&gt;Required permissions: CAN_EDIT_ORDER

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.OrderRecordResourceApi();

var orderId = 789; // Number | the internal id of order

var newVoucherId = "newVoucherId_example"; // String | newVoucherId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeVouchers(orderId, newVoucherId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| the internal id of order | 
 **newVoucherId** | **String**| newVoucherId | 

### Return type

[**GenericStatusDTO**](GenericStatusDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrderRecord"></a>
# **updateOrderRecord**
> OrderRecordDTO updateOrderRecord(orderRecordDto)

updateOrderRecord

1) Cellphone number must be in E.164 format;&lt;br/&gt;2) «PricePaid» is a price for 1 product;&lt;br/&gt;3) Required permissions: CAN_EDIT_ORDER.

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.OrderRecordResourceApi();

var orderRecordDto = new PassHubApi.OrderRecordDTO(); // OrderRecordDTO | the OrderRecord Dto


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrderRecord(orderRecordDto, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderRecordDto** | [**OrderRecordDTO**](OrderRecordDTO.md)| the OrderRecord Dto | 

### Return type

[**OrderRecordDTO**](OrderRecordDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

