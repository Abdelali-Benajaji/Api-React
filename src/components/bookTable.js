import React,{ Component } from "react"
import { BockRow } from "./bookRow"

export class BockTable extends Component{
    state = {
        books:[]
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response=>response.json())
        .then(data=>{
            this.setState({books:data})
        })
        .catch(error=>{
            console.log("failed to get data",error)
        })
    }

    render(){
        const {books}=this.state
        return(
            <div>
                <table border='1'>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>PageNumber</th>
                        <th>description</th>
                        <th>Category</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book,index)=>(
                                <BockRow book={book} index={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}