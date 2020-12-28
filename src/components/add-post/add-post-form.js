import React from 'react';
import './add-post-form.css'

export default function AddPostForm(){
    return(
        <div className='AddPostForm'>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your post: " aria-label=""
                       aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                        <button className="btn btn-success" type="button">Add Post</button>
                    </div>
            </div>


        </div>
    )
}