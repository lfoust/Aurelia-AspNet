var configForDevelopment = {
    loginRedirect: "/",
    providers: {
        google: {
            clientId: '222122584408-cpgbe0oa1h75rs1hkqc8paulks6d1ufl.apps.googleusercontent.com',
            redirectUri: "http://localhost:7822/authenticate",
            scope: ['profile', 'email']
        },
        facebook: {
            clientId:'432745350213934',
            redirectUri: "http://localhost:7822/authenticate"
        }
    }
};

var configForProduction = {
    providers: {
        google: {
            clientId: '222122584408-cpgbe0oa1h75rs1hkqc8paulks6d1ufl.apps.googleusercontent.com'
        },
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