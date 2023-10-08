import { useState } from "react"
import React from 'react'
import { PieChart, Pie, Sector, Cell,Legend,Line,Tooltip,ResponsiveContainer } from "recharts";
const Test = ()=> {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 100 },
    
  ];
  const COLORS = ["#0088FE", "#00C49F"];
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
        <div style={{width:"240px", height:"200px"}}>
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
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Legend verticalAlign="top" height={36} payload={[{ value: 'item name', type: 'pie' , id: 'ID01' }]}/>
        <Tooltip />
      </Pie>
     
    </PieChart>
 </div>
        </div>
        <div className="col-6">
            sfds
        </div>
      </div>
    </div>
  </>
  )
}

export default Test

{/* <PieChart width={230} height={200}>
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
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Legend verticalAlign="top" height={36} payload={[{ value: 'item name', type: 'pie' , id: 'ID01' }]}/>
        <Tooltip />
      </Pie>
     
    </PieChart> */}
 