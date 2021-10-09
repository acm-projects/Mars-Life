import Realm from 'realm'

export async function getRealmApp() {
   const appId = "mars-life-ewodd";
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
   const db = new Realm.App(appConfig);
   try {
     const credentials = Realm.Credentials.anonymous();
     const user = await db.logIn(credentials);
     console.log('Connected!...');
   } catch(err) {
     console.error("Failed to log in", err);
   }
   return db;
}