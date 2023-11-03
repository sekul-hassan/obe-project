import React from 'react';
import {Sidebar} from "../components/Sidebar";
import Syllabus from "../components/Syllabus";

function SyllabusPage(props) {
    return (
        <div className='container-fluid g-0'>
            <div className='row min-vh-100'>
                <div className='col-sm-12 col-md-6 col-lg-2 sidenavbar'>
                    <Sidebar/>

                </div>
                <div className='col-sm-12 col-md-6 col-lg-10'>
                    <Syllabus/>
                </div>
            </div>
        </div>
    );
}

export default SyllabusPage;