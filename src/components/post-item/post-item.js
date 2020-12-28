import React, {Component} from "react";
import style from './post-item.module.css'

export default class PostItem extends Component {

    render() {
        return (
            <div className={style.PostItem}>
                <div className={style.NameAndData}>
                    <div className={style.NMDT}><h3>PostName</h3></div>
                    <div className={style.NMDT}><h5>дата створення</h5></div>
                </div>
                <div className={style.description}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi consequuntur culpa cupiditate delectus deleniti error, in iste itaque labore magni mollitia nostrum officiis omnis possimus quis, saepe soluta suscipit?
                </div>
            </div>

        );
    }
}
