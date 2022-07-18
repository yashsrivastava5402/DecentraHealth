import React from 'react'
import "./creators.css";

export default function Creators() {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
    <div className="container mt-3 mb-4">
    <div className="col-lg-12 mt-4 mt-lg-0">
    <div className="row">
    <div className="col-md-12">
    <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
        <table className="table manage-candidates-top mb-0">
        <thead>
            <tr>
            <th>Developer's Name</th>
            <th className="text-center"></th>
            <th className="action text-right">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr className="candidates-list" >
            <td className="title" style={{ paddingTop : '15px' , paddingBottom : '15px' }}>
                <div className="thumb">
                <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/> 
                </div>
                <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                    <h5 className="mb-0"><a href="#">Aaditya Mishra</a></h5>
                    </div>
                    <div className="candidate-list-option">
                    <ul className="list-unstyled">
                        <li><i className="fas fa-filter pr-1"></i>Undergrad, B.Tech (CST)</li>
                        <li><i className="fas fa-map-marker-alt pr-1"></i>GGSIPU 24'</li>
                    </ul>
                    </div>
                </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
            </tr>
            <tr className="candidates-list">
            <td className="title" style={{ paddingTop : '15px' , paddingBottom : '15px' }}>
                <div className="thumb">
                <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                </div>
                <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                    <h5 className="mb-0"><a href="#">Aditya Jha</a></h5>
                    </div>
                    <div className="candidate-list-option">
                    <ul className="list-unstyled">
                        <li><i className="fas fa-filter pr-1"></i>Undergrad, B.Tech (ECE)</li>
                        <li><i className="fas fa-map-marker-alt pr-1"></i>NSUT 23'</li>
                    </ul>
                    </div>
                </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
            </tr>
            <tr className="candidates-list">
            <td className="title" style={{ paddingTop : '15px' , paddingBottom : '15px' }}>
                <div className="thumb">
                <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                </div>
                <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                    <h5 className="mb-0"><a href="#">Prince</a></h5>
                    </div>
                    <div className="candidate-list-option">
                    <ul className="list-unstyled">
                        <li><i className="fas fa-filter pr-1"></i>Recruitment Consultancy</li>
                        <li><i className="fas fa-map-marker-alt pr-1"></i>NSUT 22'</li>
                    </ul>
                    </div>
                </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
            </tr>
            <tr className="candidates-list">
            <td className="title" style={{ paddingTop : '15px' , paddingBottom : '15px' }}>
                <div className="thumb">
                <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                </div>
                <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                    <h5 className="mb-0"><a href="#">Shaurya Singh</a></h5>
                    </div>
                    <div className="candidate-list-option">
                    <ul className="list-unstyled">
                        <li><i className="fas fa-filter pr-1"></i>Undergrad, B.Tech (ECE)</li>
                        <li><i className="fas fa-map-marker-alt pr-1"></i>NSUT 23'</li>
                    </ul>
                    </div>
                </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
            </tr>
            <tr className="candidates-list">
            <td className="title" style={{ paddingTop : '15px' , paddingBottom : '15px' }}>
                <div className="thumb">
                <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt=""/>
                </div>
                <div className="candidate-list-details">
                <div className="candidate-list-info">
                    <div className="candidate-list-title">
                    <h5 className="mb-0"><a href="#">Yash Gupta</a></h5>
                    </div>
                    <div className="candidate-list-option">
                    <ul className="list-unstyled">
                        <li><i className="fas fa-filter pr-1"></i>Undergrad, B.Tech (ECE)</li>
                        <li><i className="fas fa-map-marker-alt pr-1"></i>NSUT 23'</li>
                    </ul>
                    </div>
                </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
