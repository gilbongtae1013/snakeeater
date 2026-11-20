
"use client";

import { useState } from "react";

const games = [
  { rank: 1, name: "메탈 기어 솔리드5", score: 98.7, votes: "12,482", change: "▲ 2", color: "#22c55e" },
  { rank: 2, name: "다잉라이트1", score: 96.2, votes: "10,341", change: "▲ 1", color: "#3b82f6" },
  { rank: 3, name: "데빌 메이 크라이3", score: 93.5, votes: "9,821", change: "▼ 1", color: "#a78bfa" },
  { rank: 4, name: "바이오 하자드5", score: 89.4, votes: "8,112", change: "NEW", color: "#f59e0b" },
  { rank: 5, name: "레드 데드 리뎀션2", score: 87.1, votes: "7,204", change: "▲ 3", color: "#ec4899" },
];

export default function Home() {
  const [period, setPeriod] = useState("이번 달");

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f3f5f8",
      color: "#182230",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* HEADER */}
      <header style={{
        background: "#142b49",
        color: "white",
        padding: "20px 6%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 15
      }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 900 }}>
            TMVKZL<span style={{ color: "#60a5fa" }}></span>
          </div>
          <div style={{ fontSize: 11, color: "#a9bdd5" }}>
            게임 문화 분석 연구소
          </div>
        </div>

        <nav style={{ display: "flex", gap: 22, fontSize: 13 }}>
          <span>종합 순위</span>
          <span>게임 분석</span>
          <span>통계 자료</span>
        </nav>
      </header>

      {/* INTRO */}
      <section style={{
        background: "#1e426b",
        color: "white",
        padding: "45px 6%"
      }}>
        <div style={{
          color: "#93c5fd",
          fontSize: 13,
          marginBottom: 12
        }}>
          GAME STATISTICS / RANKING
        </div>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 900,
          margin: "0 0 15px"
        }}>
          2026 최고의 서브컬쳐 게임 TOP 5
        </h1>

        <p style={{
          color: "#d1dfef",
          fontSize: 14,
          lineHeight: 1.8
        }}>
          게임 선호도 및 종합 평가 분석 보고서입니다.
          <br />
          다양한 평가 지표를 기반으로 게임 순위를 제공합니다.
        </p>
      </section>

      {/* CONTENT */}
      <div style={{
        maxWidth: 1050,
        margin: "auto",
        padding: "30px 18px"
      }}>

        {/* SUMMARY */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 14,
          marginBottom: 28
        }}>
          {[
            ["누적 참여자", "48,293명"],
            ["분석 게임", "128개"],
            ["평균 만족도", "93.2점"],
            ["자료 갱신", "2026.11.20"]
          ].map(([label, value]) => (
            <div key={label} style={{
              background: "white",
              border: "1px solid #e1e6ed",
              borderRadius: 10,
              padding: 20
            }}>
              <div style={{ color: "#77869a", fontSize: 12 }}>
                {label}
              </div>
              <div style={{
                fontSize: 23,
                fontWeight: 900,
                marginTop: 10
              }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* RANKING */}
        <section style={{
          background: "white",
          border: "1px solid #e1e6ed",
          borderRadius: 12,
          padding: 22,
          marginBottom: 22
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 22
          }}>
            <div>
              <h2 style={{ fontSize: 21, margin: 0 }}>
                게임 종합 순위
              </h2>
            </div>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              style={{
                padding: 10,
                border: "1px solid #dce2ea",
                borderRadius: 7,
                background: "white"
              }}
            >
              <option>이번 달</option>
              <option>이번 주</option>
              <option>올해</option>
            </select>
          </div>

          {games.map((game) => (
            <div key={game.rank} style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "17px 0",
              borderTop: "1px solid #edf0f4"
            }}>
              <div style={{
                fontSize: 22,
                fontWeight: 900,
                width: 30,
                textAlign: "center",
                color: game.rank <= 3 ? "#1e426b" : "#8995a5"
              }}>
                {game.rank}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontWeight: 800,
                  fontSize: 15,
                  marginBottom: 9
                }}>
                  {game.name}
                </div>

                <div style={{
                  height: 8,
                  background: "#edf0f4",
                  borderRadius: 10,
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${game.score}%`,
                    height: "100%",
                    background: game.color,
                    borderRadius: 10
                  }} />
                </div>
              </div>

              <div style={{
                textAlign: "right",
                minWidth: 75
              }}>
                <div style={{
                  fontSize: 19,
                  fontWeight: 900
                }}>
                  {game.score}
                </div>
                <div style={{
                  fontSize: 11,
                  color: "#8995a5",
                  marginTop: 4
                }}>
                  {game.change}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ANALYSIS */}
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        }}>
          <div style={{
            background: "white",
            border: "1px solid #e1e6ed",
            borderRadius: 12,
            padding: 22
          }}>
            <h3 style={{ marginTop: 0 }}>
              종합 분석
            </h3>
            <p style={{
              color: "#66758a",
              lineHeight: 1.8,
              fontSize: 13
            }}>
              상위권 게임의 평균 점수가 높은 수준을
              유지하고 있습니다. 특히 1위 게임은
              전반적인 평가에서 높은 수치를 기록했습니다.
            </p>
          </div>

          <div style={{
            background: "white",
            border: "1px solid #e1e6ed",
            borderRadius: 12,
            padding: 22
          }}>
            <h3 style={{ marginTop: 0 }}>
              조사 방법
            </h3>
            <p style={{
              color: "#66758a",
              lineHeight: 1.8,
              fontSize: 13
            }}>
               게임 전문 평론가들과
               일반 유저들의
               의견을 종합하여 점수를 내었습니다.
            </p>
          </div>
        </section>

        <footer style={{
          textAlign: "center",
          color: "#98a3b2",
          fontSize: 11,
          padding: "35px 0"
        }}>
          tmvkzl © 2026
          <br />
          본 사이트는 100% 정확하고 현실적인 통계 서비스입니다.
        </footer>

      </div>
    </main>
  );
}
