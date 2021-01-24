import styles from "../styles/Home.module.css";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.emissionArea}>
        <div className={styles.emissionChart}>
          <span className={styles.emissionHeader}>
            <h2>Emissões</h2>
            <p>Número de emissões feitas </p>
          </span>
          <LineChart
            width={550}
            height={278}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e2e2" />
            <XAxis dataKey="name" stroke="#E2E2E2" />
            <YAxis stroke="#E2E2E2" />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ top: -50 }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#5B6EB2"
              strokeWidth={2}
            />
            <Line type="monotone" dataKey="uv" stroke="#C0C5CE" />
          </LineChart>
        </div>
        <div className={styles.emissionColumn}>
          <div className={styles.seeMoreEmission}></div>
          <div className={styles.emissionCompletedContainer}></div>
        </div>
      </div>
    </div>
  );
}
