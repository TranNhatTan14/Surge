const version = 'V1.0.2';

function setHeaderValue(headers, headerName, value) {
  var lowerCaseHeaderName = headerName.toLowerCase();
  if (lowerCaseHeaderName in headers) {
    headers[lowerCaseHeaderName] = value;
  } else {
    headers[headerName] = value;
  }
}

var modifiedHeaders = $request.headers;
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

$done({headers: modifiedHeaders});