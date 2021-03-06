// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const myIP = "localhost";

export const environment = {
  production: false,
  //TODO
  urlAddHabit:        "http://"+myIP+":8081/addHabito",
  urlAddAlimento:     "http://"+myIP+":8081/AddAlimento",
  urlGetPropiedades:  "http://"+myIP+":8081/getAllPropiedades",
  urlValidateAdmin:    "http://"+myIP+":8081/validateAdministrador",
  urlAddAdmin:    "http://"+myIP+":8081/addAdministrador"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
