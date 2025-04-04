"use client"; // For Next.js App Router support

import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

export default function MyJourneyTimeline({ myJourney }) {
  // Ref for the whole timeline container
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isTimelineInView && timelineRef.current) {
      const lastItem = timelineRef.current.lastElementChild;
      if (lastItem) {
        const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
        controls.start({ height: lastItemOffset - 100 });
      }
    }
  }, [isTimelineInView, controls]);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <h1 className="flex items-center text-3xl lg:text-4xl font-bold">
        <span className="w-2 h-10 mr-2 mt-1.5 rounded-2xl bg-amber-400"></span>{" "}
        My Journey
      </h1>

      <div
        ref={timelineRef}
        className="w-full py-20 relative space-y-14 flex flex-col justify-center"
      >
        {/* Animated Center Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 top-24 w-1 bg-amber-400 -translate-x-1/2 origin-top"
        />

        {myJourney.map((item) => {
          const blockRef = useRef(null);
          const isBlockInView = useInView(blockRef, { once: true });

          return (
            <div
              key={item.id}
              ref={blockRef}
              className={`w-1/2 relative flex items-center gap-1 sm:gap-5 transition-all duration-500 ${
                item.id % 2 === 0
                  ? "flex-row left-[calc(50%-30px)]"
                  : "flex-row-reverse text-end -right-7"
              }`}
            >
              {/* Animated Year Circle */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={
                  isBlockInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="z-10 p-3 rounded-full bg-amber-400"
              >
                {item.year}
              </motion.span>

              <p className="text-sm sm:text-lg sm:tracking-wider">{item.highlight}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
