import React,{Component} from "react";
 
export class BockRow extends Component{
    
    render(){
        const {book}=this.props;
        const {index}=this.props;

        return(
            <tr key={index}>
                <td>
                    <img src={book.thumbnailUrl} />
                </td>
                <td>{book.title}</td>
                <td>{book.id}</td>
                <td>{book.url}</td>
                <td>{book.albumId}</td>
            </tr>
        )
    }
}