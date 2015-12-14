var configForDevelopment = {
    loginRedirect: "/",
    providers: {
        google: {
            clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com'
        }
        ,
        facebook:{
            clientId:'432745350213934',
            redirectUri: "http://localhost:7822/authenticate"
        }
    }
};

var configForProduction = {
    providers: {
        google: {
            clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
        }
        ,
        facebook:{
            clientId:'432745350213934'
        }

    }
};

var config ;
if (window.location.hostname==='localhost') {
    config = configForDevelopment;
}
else{
    config = configForProduction;
}

export default config;