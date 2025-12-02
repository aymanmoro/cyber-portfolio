import React from "react";
import { Button } from "@/components/ui/button";

const CVButton: React.FC = () => (
  <a
    href="/cv-ayman-mourtada.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <Button
      size="sm"
      className="glass neon-glow animate-pulse-glow text-black dark:text-white font-semibold"
      data-testid="button-cv-nav"
    >
      View CV
    </Button>
  </a>
);

export default CVButton;
