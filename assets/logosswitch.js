import * as logos from "./logos";

export default function(logo, link = "") {
  switch (logo) {
    case "www":
      return logos.www_logo(link);
    case "github":
      return logos.github_logo(link);
    case "react":
      return logos.react_logo();
    case "redux":
      return logos.redux_logo();
    case "vue":
      return logos.vue_logo();
    case "node":
      return logos.nodejs_logo();
    case "ostgres":
      return logos.sql_logo();
    case "mongo":
      return logos.mongodb_logo();

    default:
      return "No logo found!!";
  }
}
