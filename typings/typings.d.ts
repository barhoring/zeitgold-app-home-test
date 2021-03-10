declare module '*.graphql' {
  // tslint:disable-next-line
  import { DocumentNode } from "graphql";

  const value: DocumentNode;
  export = value;
}

declare module '*.json' {
  const displayName: any;
  export = displayName;
}
