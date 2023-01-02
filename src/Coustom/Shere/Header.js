import React from 'react';
import { FaFileAlt, FaStar, FaFolderOpen, FaRegComment, FaRegCommentAlt } from "react-icons/fa";
import './Header.css'
import { HiCloudArrowUp } from "react-icons/hi2";
import profile from '../Asserts/amit_11zon.jpg'
import meet from '../Asserts/download.png'
import Toots from './Toots';

const Header = () => {


    


    return (
        <div>

            <div className='header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="first-menu d-flex justify-content-between align-items-center">
                                <div className="seventy-menu d-flex">
                                    <div className="logo">
                                        <FaFileAlt></FaFileAlt>
                                    </div>
                                    <div className="title-input">
                                        <div className="file-name d-flex ">
                                            <input className='title' size='number' placeholder='Untitled document' type="text" />
                                            <FaStar></FaStar>
                                            <FaFolderOpen></FaFolderOpen>
                                            <HiCloudArrowUp></HiCloudArrowUp>
                                        </div>
                                        <div className="menu-area">
                                            <nav>
                                                <ul className='mene'>
                                                    <li>File
                                                        <ul className='Sub-menu'>
                                                            <li className='menu-list'>
                                                                <div className='d-flex justify-content-between '>
                                                                    <div >New File</div>
                                                                    <div>Ctrl + N</div>
                                                                </div>

                                                            </li>
                                                            <li className='menu-list'>
                                                                <div className='d-flex justify-content-between '>
                                                                    <div >Open File</div>
                                                                    <div>Ctrl + O</div>
                                                                </div>
                                                            </li>
                                                            <li className='menu-list'>
                                                                <div className='d-flex justify-content-between '>
                                                                    <div >Save</div>
                                                                    <div>Ctrl + S</div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>Edit</li>
                                                    <li>View</li>
                                                    <li>Insert</li>
                                                    <li>Format</li>
                                                    <li>Tools</li>
                                                    <li>Extensions</li>
                                                    <li>Help</li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-meet">
                                    <div><FaRegCommentAlt></FaRegCommentAlt></div>
                                    <div className='meet-btu'><img className='meet' src={meet} alt="" /></div>
                                    <div><button>Share</button></div>
                                    <div><img className="profile" src={profile} alt="" /></div>
                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            <Toots></Toots>
        </div>
    );
};

export default Header;