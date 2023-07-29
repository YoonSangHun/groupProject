import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={corpData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="corp_name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="corp_avg" fill="#8884d8" />
      </BarChart>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={corpData} columns={columns} pageSize={5} />
      </div>
    </div>
  );
  