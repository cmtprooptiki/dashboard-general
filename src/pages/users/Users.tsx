import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import { userRows } from "../../data";
import "./users.scss"
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />;
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "verified",
      headerName: "Verified",
      width: 150,
      type: "boolean",
    },
  ];


// const columns = [
//     { field: 'id', headerName: 'ID', width: 90 },
//     {
//         field:'avatar', headerName:'Avatar',width:100,
//         renderCell:(params)=>{
//             return <img src={params.row.img || "/noavatar.png"} alt=""/>
//         }
//     },
//     {
//         field:'actions', 
//         headerName:'Actions',
//         width:100,
//         renderCell:(params)=>{
//             return <div className="action">
//                 <div className="view">View</div>
//                 <div className="delete">Delete</div>

//             </div>; 
            
//         }
//     },
//     {
//         field:'status',headerName:'Status',width:100,type:"boolean"
//     },

//     {
//       field: 'firstName',
//       headerName: 'First name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'lastName',
//       headerName: 'Last name',
//       width: 150,
//       editable: true,
//     },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 110,
//       editable: true,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 ,status:true},
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 ,status:false},
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];






const Users = () => {
    const [open,setOpen] = useState(false)
    
    const { isLoading,  data } = useQuery({
      queryKey: ['allusers'],
      queryFn: () =>
        fetch('http://localhost:8800/api/users').then((res) =>
          res.json(),
        ),
    })

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={()=>setOpen(true)}>Add new user</button>
            </div>

            {isLoading ? (
              "Loading..." 
             ) : (
            <DataTable  slug="users" columns={columns} rows={data}/>
            )}
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}

        </div>
    )
}

export default Users