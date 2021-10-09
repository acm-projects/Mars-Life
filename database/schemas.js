import Realm from 'realm';

const ArticleSchema = {
    name: "Article",
    properties: {
        _id: "int",
        name: "string",
        content: "string?",
    },
    vs
};

const user = {
    name: "User",
    properties: {
        _id: "int",
        username: "string",
        password: "string",
    },
    primaryKey: "_id",
};

const realm = await Realm.open({
  path: "myrealm",
  schema: [TaskSchema],
});