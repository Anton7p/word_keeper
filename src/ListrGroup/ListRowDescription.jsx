import React from 'react';


export function ListRowDescription(props) {

    return (
            <div className="row">
                <div className="description column lg-12 ">
                    {props.description}
                </div>
            </div>
    );
}
