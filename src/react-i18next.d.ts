import { resources } from "./languages/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: (typeof resources)["English"];
  }
}
