import { useState } from "react";
import { Button } from "@/components";
import { useWindowSize } from "@/hooks";

export const Projects = () => {
  const windowSize = useWindowSize();
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
    <div className="w-100 text-center mt-3">
      <Button onClick={() => setExpanded(true)}>
        {"Discover my projects"}
      </Button>
    </div>
  );
  }

  return (
    <div className={`${windowSize.containerClass} mt-3`}>
      <p>{"Tada!"}</p>
    </div>
  );
}
