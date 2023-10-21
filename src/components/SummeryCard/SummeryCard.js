import React from "react";
import "../SummeryCard/SummeryCard.css";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Test from "../../test";
const SummeryCard = () => {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 100 },
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  return (
    <div class="card mt-4 summeryCard">
      <div class="card-body">
        <h5 class="card-title">Summery Card</h5>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div style={{ width: "240px", height: "200px" }}>
                <PieChart width={230} height={200}>
                  <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                    <Legend
                      verticalAlign="top"
                      height={36}
                      payload={[
                        { value: "item name", type: "pie", id: "ID01" },
                      ]}
                    />
                    <Tooltip />
                  </Pie>
                </PieChart>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 text-center">
              <div className="d-flex justify-content-center">
                <span
                  className="chartLegendIcon"
                  style={{ backgroundColor: COLORS[0] }}
                ></span>
                <span className="me-4">{data[0].name}</span>
                <br />
                <span
                  className="chartLegendIcon"
                  style={{ backgroundColor: COLORS[1] }}
                ></span>
                <span className="me-4">{data[1].name}</span>
              </div>
              <div className="mt-2">
                <p>
                  {data[0].name} - {data[0].value}
                </p>
                <p>
                  {data[1].name} - {data[1].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummeryCard;

{
  /* <div className='container-fluid'>
              <div className='row'>
                <div className='col-8'>
                </div>
                <div className='col-4'>
                </div>
              </div>
            </div> */
}
