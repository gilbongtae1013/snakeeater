
"use client";

import Link from "next/link";
import { useState } from "react";

// ==============================
// 관리자 전용 설정
// ==============================

const ITEMS = [
  "봐야한다",
  "안봐야한다",
  "안봐야한다",
  "안봐야한다",
  "안봐야한다",
  "안봐야한다",
];

const SECRET_WINNER = "봐야한다";

const COLORS = [
  "#f87171",
  "#fbbf24",
  "#60a5fa",
  "#34d399",
  "#a78bfa",
  "#fb923c",
];

// ==============================

export default function Home() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");

  function spin() {
    if (spinning) return;

    const targetIndex = ITEMS.indexOf(SECRET_WINNER);

    if (targetIndex === -1) return;

    setSpinning(true);
    setResult("");

    const segment = 360 / ITEMS.length;
    const targetAngle =
      360 - (targetIndex * segment + segment / 2);

    const current = rotation % 360;
    const delta =
      (targetAngle - current + 360) % 360;

    setRotation(rotation + 360 * 6 + delta);

    setTimeout(() => {
      setSpinning(false);
      setResult(SECRET_WINNER);
    }, 5200);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: 24,
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: 34, fontWeight: 900 }}>
        당신은 킹프리를
      </h1>

      <p style={{ color: "#9ca3af" }}>
        룰렛 결과에 따르지 않을 시 사망합니다.
      </p>

      {/* 룰렛 */}
      <div
        style={{
          position: "relative",
          width: "min(82vw, 380px)",
          aspectRatio: "1",
        }}
      >
        {/* 화살표 */}
        <div
          style={{
            position: "absolute",
            top: -8,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderTop: "32px solid white",
          }}
        />

        {/* 룰렛판 */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            border: "5px solid white",
            overflow: "hidden",
            position: "relative",
            background: `conic-gradient(${ITEMS.map(
              (_, i) =>
                `${COLORS[i % COLORS.length]} ${
                  (i * 360) / ITEMS.length
                }deg ${
                  ((i + 1) * 360) / ITEMS.length
                }deg`
            ).join(",")})`,
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 5s cubic-bezier(0.15, 0.8, 0.15, 1)"
              : "none",
          }}
        >
          {ITEMS.map((item, i) => {
            const angle =
              (i + 0.5) * (360 / ITEMS.length);

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  transform: `rotate(${angle}deg)`,
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "18%",
                  fontSize: "clamp(14px, 4vw, 20px)",
                  fontWeight: 900,
                  pointerEvents: "none",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      {/* 돌리기 */}
      <button
        onClick={spin}
        disabled={spinning}
        style={{
          width: "min(100%, 340px)",
          padding: 18,
          borderRadius: 16,
          border: "none",
          background: spinning ? "#4b5563" : "#6366f1",
          color: "white",
          fontSize: 21,
          fontWeight: 900,
          cursor: spinning ? "not-allowed" : "pointer",
        }}
      >
        {spinning ? "운명을 결정하는 중..." : "룰렛 돌리기"}
      </button>

      {/* 결과 */}
      {result && (
        <div
          style={{
            background: "#1f2937",
            border: "1px solid #4b5563",
            borderRadius: 18,
            padding: 26,
            width: "min(100%, 300px)",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#9ca3af", marginBottom: 12 }}>
            🎉 추첨 결과
          </p>

          <h2
            style={{
              fontSize: 34,
              fontWeight: 900,
              color: "#fbbf24",
            }}
          >
            {result}
          </h2>
        </div>
      )}

      <Link href="/game"
      className="game">최신 서브컬쳐 게임 순위 보러가기2026</Link>
    </main>
  );
}
