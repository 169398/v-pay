"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Cloud, ICloud } from "react-icon-cloud";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

interface CustomIconCloudProps {
  iconPaths: string[];
}

export default function CustomIconCloud({ iconPaths }: CustomIconCloudProps) {
  const renderedIcons = useMemo(() => {
    return iconPaths.map((path, index) => (
      <div
        key={index}
        style={{
          width: "42px",
          height: "42px",
          position: "relative",
          margin: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={path}
          alt={`Payment Icon ${index + 1}`}
          width={42}
          height={42}
          style={{ objectFit: "contain" }}
        />
      </div>
    ));
  }, [iconPaths]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
}
