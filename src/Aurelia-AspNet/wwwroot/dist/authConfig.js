System.register([], function (_export) {
    "use strict";

    var configForDevelopment, configForProduction, config;
    return {
        setters: [],
        execute: function () {
            configForDevelopment = {
                loginRedirect: "/",
                providers: {
                    google: {
                        clientId: '222122584408-cpgbe0oa1h75rs1hkqc8paulks6d1ufl.apps.googleusercontent.com',
                        redirectUri: "http://localhost:7822/authenticate",
                        scope: ['profile', 'email']
                    },
                    facebook: {
                        clientId: '432745350213934',
                        redirectUri: "http://localhost:7822/authenticate"
                    }
                }
            };
            configForProduction = {
                providers: {
                    google: {
                        clientId: '222122584408-cpgbe0oa1h75rs1hkqc8paulks6d1ufl.apps.googleusercontent.com'
                    },
                    facebook: {
                        clientId: '432745350213934'
                    }

                }
            };

            if (window.location.hostname === 'localhost') {
                config = configForDevelopment;
            } else {
                config = configForProduction;
            }

            _export("default", config);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQUksb0JBQW9CLEVBZXBCLG1CQUFtQixFQVluQixNQUFNOzs7O0FBM0JOLGdDQUFvQixHQUFHO0FBQ3ZCLDZCQUFhLEVBQUUsR0FBRztBQUNsQix5QkFBUyxFQUFFO0FBQ1AsMEJBQU0sRUFBRTtBQUNKLGdDQUFRLEVBQUUsMEVBQTBFO0FBQ3BGLG1DQUFXLEVBQUUsb0NBQW9DO0FBQ2pELDZCQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3FCQUM5QjtBQUNELDRCQUFRLEVBQUU7QUFDTixnQ0FBUSxFQUFDLGlCQUFpQjtBQUMxQixtQ0FBVyxFQUFFLG9DQUFvQztxQkFDcEQ7aUJBQ0o7YUFDSjtBQUVHLCtCQUFtQixHQUFHO0FBQ3RCLHlCQUFTLEVBQUU7QUFDUCwwQkFBTSxFQUFFO0FBQ0osZ0NBQVEsRUFBRSwwRUFBMEU7cUJBQ3ZGO0FBQ0QsNEJBQVEsRUFBQztBQUNMLGdDQUFRLEVBQUMsaUJBQWlCO3FCQUM3Qjs7aUJBRUo7YUFDSjs7QUFHRCxnQkFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBRyxXQUFXLEVBQUU7QUFDeEMsc0JBQU0sR0FBRyxvQkFBb0IsQ0FBQzthQUNqQyxNQUNHO0FBQ0Esc0JBQU0sR0FBRyxtQkFBbUIsQ0FBQzthQUNoQzs7K0JBRWMsTUFBTSIsImZpbGUiOiJhdXRoQ29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbmZpZ0ZvckRldmVsb3BtZW50ID0ge1xyXG4gICAgbG9naW5SZWRpcmVjdDogXCIvXCIsXHJcbiAgICBwcm92aWRlcnM6IHtcclxuICAgICAgICBnb29nbGU6IHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6ICcyMjIxMjI1ODQ0MDgtY3BnYmUwb2ExaDc1cnMxaGtxYzhwYXVsa3M2ZDF1ZmwuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxyXG4gICAgICAgICAgICByZWRpcmVjdFVyaTogXCJodHRwOi8vbG9jYWxob3N0Ojc4MjIvYXV0aGVudGljYXRlXCIsXHJcbiAgICAgICAgICAgIHNjb3BlOiBbJ3Byb2ZpbGUnLCAnZW1haWwnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFjZWJvb2s6IHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6JzQzMjc0NTM1MDIxMzkzNCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NzgyMi9hdXRoZW50aWNhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjb25maWdGb3JQcm9kdWN0aW9uID0ge1xyXG4gICAgcHJvdmlkZXJzOiB7XHJcbiAgICAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiAnMjIyMTIyNTg0NDA4LWNwZ2JlMG9hMWg3NXJzMWhrcWM4cGF1bGtzNmQxdWZsLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFjZWJvb2s6e1xyXG4gICAgICAgICAgICBjbGllbnRJZDonNDMyNzQ1MzUwMjEzOTM0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY29uZmlnIDtcclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZT09PSdsb2NhbGhvc3QnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWdGb3JEZXZlbG9wbWVudDtcclxufVxyXG5lbHNle1xyXG4gICAgY29uZmlnID0gY29uZmlnRm9yUHJvZHVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
