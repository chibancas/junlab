"use client";

import Typewriter from "typewriter-effect";

interface Props {
  texts: string[];
}

export default function TypewriterText({ texts }: Props) {
  return (
    <div>
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 20,
          cursor:"✏️",
          cursorClassName:"no-blink"
        }}
      />
    </div>
  );
}
