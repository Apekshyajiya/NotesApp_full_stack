import { FaNoteSticky } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import React from 'react'
import { MdMarkunread } from "react-icons/md";
import { Link } from "react-router-dom";

const NoteCard = ({note}) => {
    let body = `${note.body.split(" ").slice(0,20).join(" ")}...`
    
    const color = note.categoty =="BUISNESS"? "blue" : note.category == "PERSONAL" ? "green" : "purple"

  return (
    <div className="col-md-4 single-note-item all-category">
        <div className="card card-body">
            <span className="side-stick" style={{backgroundColor: color}}></span>
                <FaNoteSticky style={{marginLeft: "auto", color: color}}/>
                <a href="/notes-details" style={{textDecoration: "none", color: "black"}}>
                <Link to="note-detail" style={{textDecoration: "none", color: "black"}}>
                <h5 className="note-title text-truncate w-75 mb-0" data-noteheading="Book a Ticket for Movie">
                {note.title}
                </h5>
                </Link>
                </a>
                <p className="note-date font-12 text-muted">11 March 2009</p>
                <div className="note-content">
                    <p className="note-inner-content text-muted" data-notecontent="Blandit tempus porttitor aasfs. Integer posuere erat a ante venenatis.">
                    {body}
                    </p>
                </div>
                <div className="d-flex align-items-center">
                    <span className="d-flex align-items-around">
                        <a href="/notes-details">
                        <MdMarkunread style={{fontSize: "25px", cursor:"pointer", color: color}}/>
                        </a>
                        <small className="text-muted">{note.category}</small>
                    </span>
            </div>
        </div>
    </div>
  )
}

export default NoteCard