import React, { useEffect, useState } from 'react'
import tableList from './api.json'
const Table = () => {
    const [data, setData] = useState(tableList)
    const [order, setOrder] = useState('asc')

    const sorting = () => {
        if (order === 'asc') {
            const sorted = data.sort((a, b) => a.person.name.localeCompare(b.person.name))
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = data.sort((a, b) => b.person.name.localeCompare(a.person.name))
            setData(sorted)
            setOrder('asc')
        }

    }

    const citySorting = () => {
        if (order === 'asc') {
            const sorted = data.sort((a, b) => a.city.localeCompare(b.city))
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = data.sort((a, b) => b.city.localeCompare(a.city))
            setData(sorted)
            setOrder('asc')
        }

    }
    const emailSorting = () => {
        if (order === 'asc') {
            const sorted = data.sort((a, b) => a.email.localeCompare(b.email))
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = data.sort((a, b) => b.email.localeCompare(a.email))
            setData(sorted)
            setOrder('asc')
        }

    }
    const dateSorting = () => {
        if (order === 'asc') {
            const sorted = data.sort((a, b) => a.joiningDate.localeCompare(b.joiningDate))
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = data.sort((a, b) => b.joiningDate.localeCompare(a.joiningDate))
            setData(sorted)
            setOrder('asc')
        }
    }
    const roleSorting = () => {
        if (order === 'asc') {
            const sorted = data.sort((a, b) => a.role.localeCompare(b.role))
            setData(sorted)
            setOrder('dsc')
        }
        if (order === 'dsc') {
            const sorted = data.sort((a, b) => b.role.localeCompare(a.role))
            setData(sorted)
            setOrder('asc')
        }
    }


    return (
        <div>

            <table>
                <thead >
                    <tr className="head-tr">
                        <th className="head-td flex">
                            <div className="flex2">
                                <span>Name</span>
                                <span>
                                    <img src="/image/ArrowsDownUp.png" alt="arrow" className="arrow" onClick={sorting} />
                                </span>
                            </div>
                        </th>
                        <th className="head-td">
                            <div className="flex2">
                                <span>City</span>
                                <span>
                                    <img src="/image/ArrowsDownUp.png" alt="arrow" className="arrow" onClick={citySorting} />
                                </span>
                            </div>
                        </th>
                        <th className="head-td flex">
                            <div className="flex2">
                                <span>Email Address</span>
                                <span>
                                    <img src="/image/ArrowsDownUp.png" alt="arrow" className="arrow" onClick={emailSorting} />
                                </span>
                            </div>
                        </th>
                        <th className="head-td ">
                            <div className="flex2">
                                <span>joining Date</span>
                                <span>
                                    <img src="/image/ArrowsDownUp.png" alt="arrow" className="arrow" onClick={dateSorting} />
                                </span>
                            </div>
                        </th>
                        <th className="head-td flex">
                            <div className="flex2">
                                <span>Role</span>
                                <span>
                                    <img src="/image/ArrowsDownUp.png" alt="arrow" className="arrow" onClick={roleSorting} />
                                </span>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => {
                        const { city, email, joiningDate, role } = item
                        return (
                            <tr key={idx} className="sub-tr ">
                                <td className="head-td">
                                    <div className="flex2-profile">
                                        <span>
                                            <img src="/image/profile.png" alt="arrow" className="profile" onClick={sorting} />
                                        </span>
                                        <span>{item.person.name}</span>
                                    </div>
                                </td>
                                <td className="head-td">{city}</td>
                                <td className="head-td">
                                    <a href="#">
                                        {email}
                                    </a>
                                </td>
                                <td className="head-td">{joiningDate}</td>
                                <td className="head-td">{role}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
