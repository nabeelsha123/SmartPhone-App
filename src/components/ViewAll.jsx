import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Brand Name</th>
      <th scope="col">Manufacturing Year</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Realme</td>
      <td>2022</td>
      <td>13000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Samsung</td>
      <td>2022</td>
      <td>30000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Apple</td>
      <td>2023</td>
      <td>50000</td>
    </tr>
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
