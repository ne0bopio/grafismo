"use client";

import { useEffect, useRef, useState } from "react";

type StepData = {
  n: string;
  title: string;
  body: string;
  tone?: "pharma" | "industrial";
};

export function MethodSteps({ steps }: { steps: StepData[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-5">
      {/* Connecting line — desktop only */}
      <div
        className="hidden md:block absolute left-5 right-5 h-px z-0 overflow-hidden"
        style={{ top: "32px" }}
      >
        <div
          className="h-full bg-[var(--border)]"
          style={{
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 1.2s cubic-bezier(.2,.7,.2,1) 0.3s",
          }}
        />
      </div>

      {/* Animated progress over the line */}
      <div
        className="hidden md:block absolute left-5 right-5 h-px z-0 overflow-hidden"
        style={{ top: "32px" }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--pharma), var(--retail), var(--industrial))",
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 2.4s cubic-bezier(.16,1,.3,1) 0.6s",
          }}
        />
      </div>

      {steps.map((step, i) => {
        const borderColor =
          step.tone === "pharma" ? "var(--pharma)"
          : step.tone === "industrial" ? "var(--industrial)"
          : "var(--ink)";
        const textColor =
          step.tone === "pharma" ? "var(--pharma)"
          : step.tone === "industrial" ? "var(--industrial)"
          : "var(--ink)";

        return (
          <div
            key={step.n}
            className="relative z-[1]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: `opacity 600ms cubic-bezier(.2,.7,.2,1) ${200 + i * 180}ms, transform 600ms cubic-bezier(.2,.7,.2,1) ${200 + i * 180}ms`,
            }}
          >
            <div
              className="w-16 h-16 rounded-full bg-[var(--cream)] border-2 flex items-center justify-center font-mono-g text-[13px] font-medium mb-6"
              style={{
                borderColor,
                color: textColor,
                transform: visible ? "scale(1)" : "scale(0.7)",
                transition: `transform 500ms cubic-bezier(.34,1.56,.64,1) ${300 + i * 180}ms`,
              }}
            >
              {step.n}
            </div>
            <h3 className="font-display italic font-normal text-[22px] leading-[1.1] text-[var(--ink)] mb-3">
              {step.title}
            </h3>
            <p className="text-[13px] leading-[1.5] text-[var(--ink-2)]">{step.body}</p>
          </div>
        );
      })}
    </div>
  );
}
