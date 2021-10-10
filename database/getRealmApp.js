import Realm from 'realm'

export function getRealmApp() {
   const appId = "testing-ngsjy";
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
   const db = Realm.App(appConfig);
   try {
     const user = await db.logIn(credentials);
     console.log('Connected!...');
   } catch(err) {
     console.error("Failed to log in", err);
   }
   return db;
}