# sightseeingtech-passhub-api

Access PassHub with Javascript. This module offers high level and low level calls to the API.

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sightseeingtech-passhub-api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your voucherhub_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('passhub-api')` in javascript files from the directory you ran the last 
command above from.


### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const passHubApi = require('sightseeingtech-passhub-api');

let defaultClient = passHubApi.ApiClient.instance;
// It's important to connect write host for lib
defaultClient.basePath = 'YOUR_HOST';
// Configure API key authorization: X-Api-Key
let apiConfig = defaultClient.authentications['X-Api-Key'];
apiConfig.apiKey = 'YOUR_API_KEY';

// connect vendors API
const vendorsApi = new passHubApi.VendorResourceApi();

// get all vendors from API
vendorsApi.getAllVendors({}, (error, data, response) => {
    if (error) {
        console.error(error);
    }else{
        console.log('API called successfully. Returned data: ' + data);
    }
});

```

## Documentation for API Endpoints

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PassHubApi.OrderRecordResourceApi* | **createOrderRecord** | **POST** /api/v1/orderRecords | createOrderRecord
*PassHubApi.OrderRecordResourceApi* | **getAllOrderRecords** | **GET** /api/v2/orderRecords | getAllOrderRecords
*PassHubApi.OrderRecordResourceApi* | **getOrderRecord** | **GET** /api/v1/orderRecords/{id} | getOrderRecord
*PassHubApi.OrderRecordResourceApi* | **mergeVouchers** | **POST** /api/v1/orderRecords/mergeVouchers | mergeVouchers
*PassHubApi.OrderRecordResourceApi* | **updateOrderRecord** | **PUT** /api/v1/orderRecords | updateOrderRecord
*PassHubApi.ProductResourceApi* | **findProductsByVendor** | **GET** /api/v1/products/vendor/{vendorId} | findProductsByVendor
*PassHubApi.ProductResourceApi* | **getAllProducts** | **GET** /api/v2/products | getAllProducts
*PassHubApi.VendorResourceApi* | **getAllVendors** | **GET** /api/v2/vendors | getAllVendors
*PassHubApi.VoucherResourceApi* | **cancelValidation** | **POST** /api/v2/voucher/validate/cancel | V2 Cancel validation for the voucher
*PassHubApi.VoucherResourceApi* | **cancelVoucher** | **POST** /api/v1/voucher/cancel | cancelVoucher
*PassHubApi.VoucherResourceApi* | **convertVoucher** | **POST** /api/v1/voucher/convert | convertVoucher
*PassHubApi.VoucherResourceApi* | **validateVoucher** | **POST** /api/v2/voucher/validate | [V2] Validates voucher which represents single order item or group of them.


## Documentation for Authorization


### X-Api-Key

- **Type**: API key
- **API key parameter name**: X-Api-Key
- **Location**: HTTP header

