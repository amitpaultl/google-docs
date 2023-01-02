import React from 'react';
import { ImUndo, ImRedo, } from "react-icons/im";
import { AiFillPrinter, AiFillCaretDown, AiOutlineCheckCircle, AiFillCaretRight, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter, AiFillFormatPainter, AiOutlineUnderline } from "react-icons/ai";
import { MdFormatColorText, MdOutlineFormatLineSpacing, MdFormatClear, MdOutlineFormatIndentIncrease, MdOutlineFormatIndentDecrease, MdFormatListBulleted, MdFormatListNumbered } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { FiLink2 } from "react-icons/fi";
import { FaHighlighter } from "react-icons/fa";
import { BsListCheck } from "react-icons/bs";
// import { HiListBullet } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
const Toots = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="toots-bar d-flex">
                            <div className='tool-icon'>
                                <div className="icon"><ImUndo></ImUndo></div>
                            </div>
                            <div className='tool-icon' >
                                <div className="icon"><ImRedo></ImRedo></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiFillPrinter></AiFillPrinter></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiOutlineCheckCircle></AiOutlineCheckCircle></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiFillFormatPainter></AiFillFormatPainter></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiFillFormatPainter></AiFillFormatPainter></div>
                            </div>

                            <div className='tool-icon'>

                                <ul className='mene'>
                                    <span>|</span>
                                    <div className='tools d-flex justify-content-between '>
                                        <input type="text" size={1} defaultValue={'100 %'} />

                                        <div className='Sub-menu w-auto'>
                                            <div className='menu-list '>
                                                <div>
                                                    20
                                                </div>
                                                <div>
                                                    30
                                                </div>
                                                <div>
                                                    40
                                                </div>
                                                <div>
                                                    50
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <span>|</span>
                                    <div className='tools d-flex justify-content-between '>Normal Title
                                        <div>
                                            <div className="icon"><AiFillCaretDown></AiFillCaretDown></div>
                                        </div>
                                        <div className='Sub-menu'>
                                            <div className='menu-list'>
                                                <div className=' d-flex justify-content-between '>
                                                    <div >Title</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>

                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >SubTitle</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Heading 1</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Heading 2</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Heading 3</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Heading 3</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <span>|</span>
                                    <div className='tools d-flex justify-content-between '>Roboto
                                        <div>
                                            <div className="icon"><AiFillCaretDown></AiFillCaretDown></div>
                                        </div>
                                        <div className='Sub-menu'>
                                            <div className='menu-list'>
                                                <div className=' d-flex justify-content-between '>
                                                    <div >Arial</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>

                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Roboto serif</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Comforaa</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>
                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Lexend</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Lora</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                            <div className='menu-list'>
                                                <div className='d-flex justify-content-between '>
                                                    <div >Time New Roman</div>
                                                    <div><AiFillCaretRight></AiFillCaretRight></div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <span>|</span>
                                </ul>

                            </div>

                            <div className='tool-icon'>
                                <div className='font'>
                                    <span>+</span>
                                    <select name="" id="">
                                        <option value="12">12</option>
                                        <option value="16">16</option>
                                        <option value="18">18</option>
                                    </select>
                                    <span>-</span>
                                </div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><BiBold></BiBold></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><BiItalic></BiItalic></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiOutlineUnderline></AiOutlineUnderline></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdFormatColorText></MdFormatColorText></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><FaHighlighter></FaHighlighter></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><FiLink2></FiLink2></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><BiCommentAdd></BiCommentAdd></div>
                            </div>
                            <div className='tool-icon'>
                                <div className='tools'>
                                    <div className="icon"><BiCommentAdd></BiCommentAdd> <AiFillCaretDown></AiFillCaretDown></div>
                                    <div className="icon"></div>
                                    <div className='Sub-menu w-auto'>
                                        <div className='menu-list '>
                                            <div>
                                                20
                                            </div>
                                            <div>
                                                30
                                            </div>
                                            <div>
                                                40
                                            </div>
                                            <div>
                                                50
                                            </div>

                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiOutlineAlignLeft></AiOutlineAlignLeft></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiOutlineAlignCenter></AiOutlineAlignCenter></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><AiOutlineAlignRight></AiOutlineAlignRight></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdOutlineFormatLineSpacing></MdOutlineFormatLineSpacing></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><BsListCheck></BsListCheck></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdFormatListBulleted></MdFormatListBulleted></div>
                            </div>

                            <div className='tool-icon'>
                                <div className="icon"><MdFormatListNumbered></MdFormatListNumbered></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdOutlineFormatIndentDecrease></MdOutlineFormatIndentDecrease></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdOutlineFormatIndentIncrease></MdOutlineFormatIndentIncrease></div>
                            </div>
                            <div className='tool-icon'>
                                <div className="icon"><MdFormatClear></MdFormatClear></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toots;