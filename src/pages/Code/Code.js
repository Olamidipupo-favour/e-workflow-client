import React, { useState, useEffect, useContext } from 'react'
import MainCont from '../../components/MainCont/MainCont'
import LeftNavbar from '../../components/LeftNavbar'

import "./style.css"
import Layout from '../../components/Layout/Layout'
import { FiTrash } from 'react-icons/fi'
import TopNavbar from '../../components/TopNavbar/Top'
import useFetch from '../../hooks/useFetch'

import DataContext from '../../context/DataContext'
import apiRoutes from "../../api_routes/index"


function Code() {
    return (
        <Layout>
            <LeftNavbar active="code" />
            <MainCont>
                <TopNavbar activeBar={"Code / Token"} />
                <GenerateCode />
            </MainCont>
        </Layout>
    )
}

export default Code

function GenerateCode() {
    const { refreshToken, id } = JSON.parse(localStorage.getItem("e-workflow"))
    // get all codes generated by admin
    const test = useFetch(apiRoutes.getTokens, {
        method: "POST",
        headers: {
            "authentication": `Bearer ${refreshToken}`
        },
        body: JSON.stringify({ userId: id })
    })


    return (
        <div className="code-cont">
            <div className="left">
                <div className="head">
                    <p>List of Tokens</p>
                </div>
                <br />
                <table className="table table-striped table-hover codes-list">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Tokens</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>#199643</td>
                            <td>Feb 12 2022, 4:04 pm</td>
                            <td>
                                <FiTrash className='icon' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="right">
                <div className="head">
                    <p>Generate Tokens</p>
                </div>
                <div className="generate-cont">
                    <input type="text" placeholder='Tokens' className="input" disabled />
                    <div className="actions">
                        <button className="save btn" onClick={""}>Save</button>
                        <button className="generate btn" onClick={""}>Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}