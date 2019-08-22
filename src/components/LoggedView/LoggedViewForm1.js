import React, {Component}  from "react";
import "../../scss/appform1.scss";
import { Link } from 'react-router-dom'



class LoggedViewForm_1 extends Component {
    state = {
       items: []
   }
   
   handleSelectItem = (event) => {
       this.setState({
           items: this.state.items.concat(event.target.value)
       })
   };

   handleOnSubmit = (e) => {
       e.preventDefault();
       const result = {};
       for (const input of e.target) {
           result[input.name] = input.checked
       }
       this.props.onNext(2, result)
   }

   render(){
     return (
         <div className="form-container">
             <div className="form-app-header">
                 <span>
                     Krok 1/4
                 </span>
                 <h1>
                     Zaznacz co chcesz oddać:
                 </h1>
             </div>
             <form className="form-one" onSubmit={this.handleOnSubmit}>
                 <label>
                     ubrania, które nadają się do ponownego użycia
                     <input
                        name='goodStuff'
                         type="checkbox"
                         value={"ubrania w dobrym stanie"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     ubrania, do wyrzucenia
                     <input
                        name="dupa"
                         type="checkbox"
                         value={"ubrania do wyrzucenia"}
                         onChange={this.handleSelectItem}
                     />

                     <span className="checkmark"></span>
                 </label>
                 <label>
                     zabawki
                     <input
                         type="checkbox"
                         value={"zabawki"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     książki
                     <input
                         type="checkbox"
                         value={"książki"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <label>
                     inne
                     <input
                         type="checkbox"
                         value={"inne"}
                         onChange={this.handleSelectItem}
                     />
                     <span className="checkmark"></span>
                 </label>
                 <button type="submit">

                         Dalej

                 </button>
             </form>
         </div>
     )
   }
 }


export default LoggedViewForm_1 