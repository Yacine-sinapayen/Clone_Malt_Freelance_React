// ce composant va être un exempled e l'ancinne syntaxe react avec les class component
import { Component } from 'react';

class EmailInput extends Component {
     // Je récupère mes données grâce à mon constructor
     constructor(props) {
          super(props);
          // Ma fonction updateInputvalue est fléchée donc implicitement relier 'binder' à mon constructor et mon 'this'. Si ça n'avait pas étét le cas j'aurais écrire :
        //   this.updateInputvalue = this.updateInputvalue.bind(this)
          this.state = {
               inputValue: '',
          };
     }

     // Mise à nour de la valeur de notre Input. pas besoin de 'const' devant car étant donné que vous êtes dans une classe  , updateInputValue  est une méthode de votre classe EmailInput.

     updateInputvalue = (value) => {
          this.setState({ inputValue: value });
     };

     render() {
          // Je récupère theme en destructurant this.props
          const { theme } = this.props;
          return (
               <div>
               {/* 'this.state' nous permet d'accéder au state courant. */}
                    <input onChange={(e) => this.updateInputvalue(e.target.value)} />
               </div>
          );
     }
}
