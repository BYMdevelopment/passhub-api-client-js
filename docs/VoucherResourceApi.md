# PassHubApi.VoucherResourceApi

All URIs are relative to *https://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelValidation**](VoucherResourceApi.md#cancelValidation) | **POST** /api/v2/voucher/validate/cancel | [V2] Cancel validation for the voucher
[**cancelVoucher**](VoucherResourceApi.md#cancelVoucher) | **POST** /api/v1/voucher/cancel | cancelVoucher
[**convertVoucher**](VoucherResourceApi.md#convertVoucher) | **POST** /api/v1/voucher/convert | convertVoucher
[**validateVoucher**](VoucherResourceApi.md#validateVoucher) | **POST** /api/v2/voucher/validate | [V2] Validates voucher which represents single order item or group of them.


<a name="cancelValidation"></a>
# **cancelValidation**
> GenericStatusDTO cancelValidation(transactionTag, opts)

[V2] Cancel validation for the voucher

Required permissions: CAN_CANCEL_VALIDATION

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.VoucherResourceApi();

var transactionTag = "transactionTag_example"; // String | the transaction tag of validation

var opts = { 
  'reason': "reason_example", // String | the reason of validation
  'note': new PassHubApi.OrderNoteParamDTO() // OrderNoteParamDTO | the validation note dto
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelValidation(transactionTag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionTag** | **String**| the transaction tag of validation | 
 **reason** | **String**| the reason of validation | [optional] 
 **note** | [**OrderNoteParamDTO**](OrderNoteParamDTO.md)| the validation note dto | [optional] 

### Return type

[**GenericStatusDTO**](GenericStatusDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelVoucher"></a>
# **cancelVoucher**
> GenericStatusDTO cancelVoucher(orderId, opts)

cancelVoucher

Required permissions: CAN_CANCEL_ORDER

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.VoucherResourceApi();

var orderId = 789; // Number | the internal id of order

var opts = { 
  'voucherId': "voucherId_example", // String | the voucher id
  'note': new PassHubApi.OrderNoteParamDTO() // OrderNoteParamDTO | the voucher note dto
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelVoucher(orderId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| the internal id of order | 
 **voucherId** | **String**| the voucher id | [optional] 
 **note** | [**OrderNoteParamDTO**](OrderNoteParamDTO.md)| the voucher note dto | [optional] 

### Return type

[**GenericStatusDTO**](GenericStatusDTO.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="convertVoucher"></a>
# **convertVoucher**
> JSONObject convertVoucher(oldVoucherId, newVoucherId)

convertVoucher

Required permissions: CAN_CONVERT_VOUCHER

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.VoucherResourceApi();

var oldVoucherId = "oldVoucherId_example"; // String | the old voucher id

var newVoucherId = "newVoucherId_example"; // String | the new voucher id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertVoucher(oldVoucherId, newVoucherId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oldVoucherId** | **String**| the old voucher id | 
 **newVoucherId** | **String**| the new voucher id | 

### Return type

[**JSONObject**](JSONObject.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateVoucher"></a>
# **validateVoucher**
> ValidationResult validateVoucher(validationId, vendorId, opts)

[V2] Validates voucher which represents single order item or group of them.

Required permissions: CAN_VALIDATE;

### Example
```javascript
var PassHubApi = require('pass_hub_api');
var defaultClient = PassHubApi.ApiClient.instance;

// Configure API key authorization: X-Api-Key
var X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

var apiInstance = new PassHubApi.VoucherResourceApi();

var validationId = "validationId_example"; // String | the voucher validation id

var vendorId = 789; // Number | the internal id of vendor

var opts = { 
  'productTag': "productTag_example", // String | the product tag
  'orderItemIds': [3.4], // [Number] | the array of order item ids
  'skipExpiryCheck': true, // Boolean | flag to skip expiry check within strategy
  'extraParamDTO': new PassHubApi.ExtraValidationParamDTO() // ExtraValidationParamDTO | the validation extra params dto
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateVoucher(validationId, vendorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validationId** | **String**| the voucher validation id | 
 **vendorId** | **Number**| the internal id of vendor | 
 **productTag** | **String**| the product tag | [optional] 
 **orderItemIds** | [**[Number]**](Number.md)| the array of order item ids | [optional] 
 **skipExpiryCheck** | **Boolean**| flag to skip expiry check within strategy | [optional] 
 **extraParamDTO** | [**ExtraValidationParamDTO**](ExtraValidationParamDTO.md)| the validation extra params dto | [optional] 

### Return type

[**ValidationResult**](ValidationResult.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

