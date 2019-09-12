import * as logos from "./logos";
export const loremipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
    case "postgres":
      return logos.sql_logo();
    case "mongo":
      return logos.mongodb_logo();
    case "pug":
      return logos.pugjs_logo();
    case "passportjs":
      return logos.passportjs_logo();
    case "mysql":
      return logos.mysql_logo();
    case "socketio":
      return logos.socketio_logo();
    case "prisma":
      return logos.prisma_logo();
    case "nextjs":
      return logos.nextjs_logo();
    case "apollo":
      return logos.apollo_logo();
    case "graphql":
      return logos.graphql_logo();
    default:
      return <p>[{logo}]</p>;
  }
}
