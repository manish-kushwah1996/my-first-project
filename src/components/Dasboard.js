// import { useEffect, useState } from "react"
// import { Table } from 'react-bootstrap'
// function Dashboard() {
//     const [data, setData] = useState([])

//     useEffect(() => {
//         dashboard();
//     }, [])

//     const dashboard = async (e) => {
//         e.preventDefault();

//         const res = await fetch("  ", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 users,
//                 products,
//                 earning,
//                 daily_order,
//             })
//         });

//         const result = await res.json();
//         //  console.log("result",resp)
//         setData(result)
//     }

//     return (

//         <div className="App">
//             <h1>Get api</h1>
//             <Table>
//                 <tbody>
//                     <tr>
//                         <th>Users</th>
//                         <th>Produts</th>

//                         <th>earning</th>
//                         <th>daily order</th>
//                     </tr>
//                     {
//                         data.map((item, i) => {
//                             <tr key={i} >
//                                 <td>{item.users}</td>
//                                 <td>{item.produts}</td>
//                                 <td>{item.earning}</td>
//                                 <td>{item.daily_order}</td>
//                             </tr>
//                         })
//                     }

//                 </tbody>
//             </Table>

//         </div>
//     )
// }
// export default Dashboard;