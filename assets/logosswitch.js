import * as logos from "./logos";

export default function(logo) {
  switch (logo) {
    case "www":
      return logos.www_logo();
    case "github":
      return logos.github_logo();
    case "react":
      return logos.react_logo();
    case "redux":
      return logos.redux_logo();
    case "vue":
      return logos.vue_logo();

    default:
      return "No logo found!!";
  }
}
