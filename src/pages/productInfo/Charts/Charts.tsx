import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import '../ProductInfo.css';

const Charts: React.FC = () => {
  const data = [
    { name: "Сент", price: 78999 },
    { name: "Окт", price: 82000 },
    { name: "Ноя", price: 85000 },
    { name: "Дек", price: 88000 },
    { name: "Янв", price: 90000 },
    { name: "Фев", price: 93000 },
  ];
  return (
    <div className="charts-content">
      <div className="charts-block">
        <p className="title">История цены</p>
        <div className="chartContainer">
          <LineChart
            width={670}
            height={205}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#ff4d4d"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
        <div className="monthLabels">
          {data.map((item, index) => (
            <p key={index} className="monthLabel">
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="grid-charts">
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            width: 345,
            padding: 20,
            backgroundColor: "white",
            borderRadius: 12,
            borderColor: "rgba(242, 245, 249, 1)",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p
              style={{
                fontSize: 24,
                fontWeight: "700",
                lineHeight: 1.5,
              }}
            >
              83 999 ₽
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: "500",
                lineHeight: 1.25,
                color: "rgba(48, 209, 112, 1)",
              }}
            >
              Доставка бесплатная
            </p>
            <div
              style={{
                backgroundColor: "rgba(253, 253, 253, 0.60)",
                borderRadius: 8,
                padding: "4px 12px",
                display: "inline-block",
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "rgba(48, 209, 112, 1)",
                }}
              >
                -12% от цены
              </p>
            </div>
            <div style={{ marginTop: 20 }}>
              <button
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  lineHeight: 1.25,
                  color: "rgba(255, 77, 77, 1)",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Перейти в магазин
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
