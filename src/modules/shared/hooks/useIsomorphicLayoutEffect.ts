import * as React from "react";
const useIsomorphicLayoutEffect =
  //@ts-ignore
  //eslint:disable-next-line:deprecation
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
    ? React.useLayoutEffect
    : React.useEffect;

export default useIsomorphicLayoutEffect;
