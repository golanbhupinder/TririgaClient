var soap = require('soap');
var util = require('util');

var args = {};
var wsdlPath = __dirname + '\\TririgaWS.xml';

//create SOAP client
soap.createClient(wsdlPath, function(err, client) {
    
    
    client.setSecurity(new soap.BasicAuthSecurity('username','password'));
   
    client.getModules(args, function(err, result) {
        
            console.log(result);
            console.log(util.inspect(result, {showHidden: false, depth: null}));
        
    });


});

