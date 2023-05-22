import React from 'react'
import { Table } from 'react-bootstrap'
export default function NesteadMap() {
    const arr = [{
        name: "laxmi", email: "laxmi@gmail.com", address: [{ fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" },
        { fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" }]
    },
          {name:"Amruta",email:"Amruta@gmail.com",address: [{ fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" },
          { fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" }]},
          {name:"Priyanka",email:"priya@gmail.com",address: [{ fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" },
          { fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" }]},
          {name:"Nisha",email:"nisha@gmail.com",address: [{ fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" },
          { fno: "101", city: "hhsh" }, { fno: "102", city: "yyy" }]}

    ]
    return (
        <div>
            <Table variant='dark' striped hover >
                <thead><tr>
                    <td>S.N</td>
                    <td>name</td>
                    <td>email</td>
                    <td>address</td></tr></thead>
                <tbody>
                    {arr.map((e,s) => {
                        return (
                            <>
                                <tr key={s}>
                                    <td>{s+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{
                                        <Table striped variant='dark'> <tbody>
                                            {e.address.map((i) =>

                                                <tr>
                                                    <td>{i.fno}</td>
                                                    <td>{i.city}</td>
                                                </tr>
                                            )}</tbody>
                                        </Table>
                                    }</td>
                                </tr>

                            </>)
                    })}
                </tbody>

            </Table>
        </div>
    )
}
