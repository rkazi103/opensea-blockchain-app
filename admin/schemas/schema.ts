import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import users from "./users";
import marketItems from "./marketItems";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([users, marketItems]),
});
