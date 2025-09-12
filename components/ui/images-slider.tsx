"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  className,
  autoplay = true,
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const loadImages = useCallback(() => {
    const loadPromises = images.map((image) => {
      return new Promise<string>((resolve, reject) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });
    Promise.all(loadPromises)
      .then((loaded) => setLoadedImages(loaded))
      .catch((error) => console.error("Failed to load images", error));
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };
    window.addEventListener("keydown", handleKeyDown);

    // Ligne corrigée ici
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const slideVariants = {
    initial: { scale: 1.2, x: "-100%", opacity: 0, rotateY: 45 },
    visible: {
      scale: 1,
      x: "0%",
      rotateY: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] },
    },
    exit: { scale: 0.8, x: "100%", opacity: 0.5, transition: { duration: 0.8 } },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{ perspective: "1000px" }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && (
        <AnimatePresence>
            <motion.div
            key={currentIndex}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={{
              initial: { scale: 1.2, x: "-100%", opacity: 0, rotateY: 45 },
              visible: {
              scale: 1,
              x: "0%",
              rotateY: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeInOut" }, // <-- Correction ici
              },
              exit: { scale: 0.8, x: "100%", opacity: 0.5, transition: { duration: 0.8 } },
            }}
            className="absolute inset-0"
            >
            <Image
              src={loadedImages[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};