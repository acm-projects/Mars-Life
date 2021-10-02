import Realm from 'realm';

const ArticleSchema = {
    name: "Article",
    properties: {
        _id: "int",
        name: "string",
        content: "string?",
    },
    primaryKey: "_id",
};

const realm = await Realm.open({
  path: "myrealm",
  schema: [TaskSchema],
});