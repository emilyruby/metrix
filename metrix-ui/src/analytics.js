function start() {
  // 2. Initialize the JavaScript client library.

  gapi.client.init({
    'apiKey': 'YOUR_API_KEY',
    'discoveryDocs': ['https://people.googleapis.com/$discovery/rest']
  }).then(function() {
    return gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    })
  }).then(function(response) {
    console.log(response.result)
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message)
  })
}

gapi.load('client', start);
