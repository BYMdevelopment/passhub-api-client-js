const passHubApi = require('passhub-api');

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
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});
