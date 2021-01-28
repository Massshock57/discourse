import RestModel from "discourse/models/rest";
import { equal } from "@ember/object/computed";

export const CREATED = 0;
export const TRANSITIONED_TO = 1;
export const EDITED = 2;

export default RestModel.extend({
  created: equal("reviewable_history_type", CREATED),
});
