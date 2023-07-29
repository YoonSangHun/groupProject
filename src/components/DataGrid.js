const columns = [
    { field: 'corp_name', headerName: 'Corporation Name', width: 200 },
    { field: 'corp_avg', headerName: 'Average Years Worked', width: 200 },
    // add more columns as needed
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={corpData} columns={columns} pageSize={5} />
    </div>
  );
  