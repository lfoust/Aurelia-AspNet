System.register([], function (_export) {
    'use strict';

    var configForDevelopment, configForProduction, config;
    return {
        setters: [],
        execute: function () {
            configForDevelopment = {
                loginRedirect: "/",
                providers: {
                    google: {
                        clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com'
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
                        clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
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

            _export('default', config);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBQUksb0JBQW9CLEVBY3BCLG1CQUFtQixFQWFuQixNQUFNOzs7O0FBM0JOLGdDQUFvQixHQUFHO0FBQ3ZCLDZCQUFhLEVBQUUsR0FBRztBQUNsQix5QkFBUyxFQUFFO0FBQ1AsMEJBQU0sRUFBRTtBQUNKLGdDQUFRLEVBQUUsMEVBQTBFO3FCQUN2Rjs7QUFFRCw0QkFBUSxFQUFDO0FBQ0wsZ0NBQVEsRUFBQyxpQkFBaUI7QUFDMUIsbUNBQVcsRUFBRSxvQ0FBb0M7cUJBQ3BEO2lCQUNKO2FBQ0o7QUFFRywrQkFBbUIsR0FBRztBQUN0Qix5QkFBUyxFQUFFO0FBQ1AsMEJBQU0sRUFBRTtBQUNKLGdDQUFRLEVBQUUsMEVBQTBFO3FCQUN2Rjs7QUFFRCw0QkFBUSxFQUFDO0FBQ0wsZ0NBQVEsRUFBQyxpQkFBaUI7cUJBQzdCOztpQkFFSjthQUNKOztBQUdELGdCQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFHLFdBQVcsRUFBRTtBQUN4QyxzQkFBTSxHQUFHLG9CQUFvQixDQUFDO2FBQ2pDLE1BQ0c7QUFDQSxzQkFBTSxHQUFHLG1CQUFtQixDQUFDO2FBQ2hDOzsrQkFFYyxNQUFNIiwiZmlsZSI6ImF1dGhDb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29uZmlnRm9yRGV2ZWxvcG1lbnQgPSB7XHJcbiAgICBsb2dpblJlZGlyZWN0OiBcIi9cIixcclxuICAgIHByb3ZpZGVyczoge1xyXG4gICAgICAgIGdvb2dsZToge1xyXG4gICAgICAgICAgICBjbGllbnRJZDogJzIzOTUzMTgyNjAyMy1pYmsxMG1iOXA3dWxsNTRqNTVhNjFvZzVsdm5qcmZmNi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIGZhY2Vib29rOntcclxuICAgICAgICAgICAgY2xpZW50SWQ6JzQzMjc0NTM1MDIxMzkzNCcsXHJcbiAgICAgICAgICAgIHJlZGlyZWN0VXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NzgyMi9hdXRoZW50aWNhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjb25maWdGb3JQcm9kdWN0aW9uID0ge1xyXG4gICAgcHJvdmlkZXJzOiB7XHJcbiAgICAgICAgZ29vZ2xlOiB7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiAnMjM5NTMxODI2MDIzLTNsdWR1MzkzNHJtY3JhM29xc2NjMWdpZDNsOW80OTdpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgZmFjZWJvb2s6e1xyXG4gICAgICAgICAgICBjbGllbnRJZDonNDMyNzQ1MzUwMjEzOTM0J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY29uZmlnIDtcclxuaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZT09PSdsb2NhbGhvc3QnKSB7XHJcbiAgICBjb25maWcgPSBjb25maWdGb3JEZXZlbG9wbWVudDtcclxufVxyXG5lbHNle1xyXG4gICAgY29uZmlnID0gY29uZmlnRm9yUHJvZHVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
