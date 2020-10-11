import React, { Component } from 'react'
import styles from './AutoComplete.module.css'
import './Grid.css'
//import icon from './icon.png'

export class AutoComplete extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items: [],
             value: '',
        }
    }
    
    

    loadOptions= async(query)=>{
        
        this.setState({
            items: [],
            value: query
        })
        if(query.length>2){
            const response = await fetch(`https:base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name=${query}`);
            const json = await response.json();
            const places = json.data.result;
            //console.log(places)
            if(places.length===0){
                this.setState({
                    items: [{name: 'No Results', country: ''}]
                })
            }
            else
            places.forEach(i=>{
                if(this.state.items.length<5)
                this.setState({
                    items: [...this.state.items, {name: i.name, country: i.secondary_name}]
                })
            }
                
            )
        }  
        
        
    }

    itemSelected(li){
          this.setState(()=>({
              value: li,
              items: []
          })) 
    }

    clearList(){
        this.setState(()=>({
            items: []
        })) 
    }
    
    render() {
        
        return (
            <div className={styles.AutoComplete}>
                <div id={styles.abs}>
                <form id={styles.myForm} className="gridmain">
                    
                    <input className="div1" value={this.state.value} placeholder='Search by College or City' onChange={(e)=> {this.loadOptions(e.target.value)}} type='text'/>
                    <button className="div2"><span><img src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png" alt="search icon" style={{height:'17px', paddingRight:'8px', paddingTop:'15px', filter: 'invert(100%)'}}/></span>Search</button>  
                    <div className="div3">
                    <ul>
                       {this.state.items.map((item, index)=><li key={index} onClick={()=>{if(item.name!=='No Results')this.itemSelected(item.name)}} className={item.name==='No Results' ? "hidden" : "nothidden"}>
                           <div>
                               <div className="li1">{item.name}</div>
                               <div className="li2">{item.country}</div>
                            </div>
                            </li>)}
                    </ul>
                    </div>
                 
                </form>
                </div>
            </div>
        )
    }
}

export default AutoComplete
