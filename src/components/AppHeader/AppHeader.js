import React, {Component} from 'react'
import AutoComplete from '../AutoComplete/AutoComplete'
import styles from './AppHeader.module.css'


export class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    onClick = () => {
        this.child.current.clearList();
    };

    render(){
    return (
        <div className={styles.header} onClick={this.onClick}>
            <div className={styles.text}><h1>Home away from Home</h1>
            <p>Book your student accommodation near top universities across the globe.</p></div>
            <div id={styles.pdiv}></div>
            <div id={styles.gap}><AutoComplete ref={this.child}/></div>
            
            <a href="https://www.youtube.com/watch?v=j2o8SZvCa4M&feature=emb_title" target="_blank" rel="noopener noreferrer">Watch video to know how amberstudent works! <span><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Tip-of-the-day-bulb-%28png%29.png" alt="insight"/></span></a>
        </div>
             
     )
    }
}

export default AppHeader
