import React from "react"
// import "../../scss/appform2.scss"
import { Link } from 'react-router-dom'

class Form2 extends React.Component {
   render(){
     return (
         <div className="form-container form2-container">
             <div className="info-bar">
                 <h1>
                     Ważne!
                 </h1>
                 <p>
                     Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz tutaj.
                 </p>
             </div>
             <div className="form-app-header form2-header">
                 <span>
                     Krok 2/4
                 </span>
                 <h1>
                     Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                 </h1>
             </div>
             <div className="form2-select-box">
                 <p>
                     Liczba 60l worków:
                 </p>
                 <form>
                    <button type="prev">
                            Wstecz
                     </button>
                     <button type="next">
                            Dalej
                     </button>

                 </form>
             </div>
         </div>
     )
   }
 }

 export default Form2