import React, {Component} from 'react';
import PostItem from "../post-item/post-item";


export default class AddPostCreator extends Component {
    render() {
        const {PostItems} = this.props.state;
        const AddPostItems = PostItems.map((s) => <PostItem name={s.name} description={s.description}
                                                                             data={s.data}/>)


        return (
            <div>
                {AddPostItems}
            </div>
        )
    }
}
// export default function AddPostCreator(props){
//
//         const AddPostItems = props.state.PostItems.map((s)=> <PostItem name={s.name} description={s.description} date={s.date}/>)
//
//         return(
//             <div>
//                 {AddPostItems}
//             </div>
//         )
//
// }