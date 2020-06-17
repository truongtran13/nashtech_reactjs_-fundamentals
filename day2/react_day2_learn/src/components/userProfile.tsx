import React, { MouseEvent } from "react";

interface IUserProfileProp {
    handleClick?: (e: MouseEvent) => {};
    userName: string;
    avatar?: string;
}

export function UserProfile(props : IUserProfileProp) {
    //Solution 1
    // let imageElement = <p>No Image</p>;
    // if(props.avatar) {
    //     imageElement = <img className='img-responsive' src={props.avatar} alt=""/>;
    // }
    // return (
    //     <div onClick={props.handleClick}>
    //         <h3>{props.userName}</h3>
    //         {imageElement}
    //     </div>
    // );

    //Solution 2 props.avatar = 0 => false
    // return (
    //     <div onClick={props.handleClick}>
    //         <h3>{props.userName}</h3>
    //         {props.avatar ? <img className='img-responsive' src={props.avatar} alt=""/> : null}
    //     </div>
    // );

    //Solution 3 props.avatar = 0 => display 0
    //React.Fragment: return more than one result. Here is more than 1 div
    //Another way to return more than one result is using <> ... </> instead of <React.Fragement> ... </React.Fragement> 
    //But <React.Fragement> work for every case
    //Find out more: React nested tree
    return (
        <React.Fragment> 
            <div onClick={props.handleClick}>
                <h3>{props.userName}</h3>
                {props.avatar && <img className='img-responsive' src={props.avatar} alt=""/>}
            </div>
            <div>Content 2</div>
        </React.Fragment>
    );
}