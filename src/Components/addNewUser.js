import React, { Fragment } from 'react';
import '../App.sass'

 class AddNewUser extends React.Component {

    constructor(props) {
        super(props);

        

        this.id = React.createRef();
        this.fName = React.createRef();
        this.sName = React.createRef();
        this.phone = React.createRef();
        this.email = React.createRef();

        this.state = {
            showButton: false,
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const usr = {
            id: this.id.current.value,
            firstName: this.fName.current.value,
            lastName: this.sName.current.value,
            phone: this.phone.current.value,
            email: this.email.current.value,
            address: {
                streetAddress: '',
			    city: '',
			    state: '',
			    zip: ''
            }
        }
        this.props.addUser(usr) 
      };

      handleChange = () => {
        if( !this.id.current.value ||
            !this.phone.current.value || 
            !this.fName.current.value || 
            !this.sName.current.value ||
            !this.email.current.value) {
            this.setState({showButton: false})
        } else {
            this.setState({showButton: true})
        }
        
    }

    render() {
    return (
        <Fragment>
            <form className="has-text-left" onSubmit={this.submitHandler}>
                <h3 className="title">Добавить запись в таблицу</h3>
                <fieldset className="field">
                    <label className="label"> ID:
                        <input className="input is-primary" 
                        onChange={(e)=> this.handleChange()}
                        ref={this.id} 
                        placeholder='ID'
                        >
                        </input>
                    </label>
                    <label className="label">First Name
                        <input className="input is-primary" 
                        onChange={(e)=> this.handleChange()}
                       ref={this.fName} 
                        placeholder='First Name'
                        >
                        </input>
                    </label>
                    <label className="label">Last Name
                        <input className="input is-primary" 
                        onChange={(e)=> this.handleChange()}
                        ref={this.sName} 
                        placeholder='Last Name'
                       >
                        </input>
                    </label>
                    <label className="label">Email
                        <input className="input is-primary" 
                        onChange={(e)=> this.handleChange()}
                        ref={this.email} 
                        type='email'
                        placeholder='Email'
                        >
                        </input>
                    </label>
                    <label className="label">Phone
                        <input className="input is-primary" 
                        onChange={(e)=> this.handleChange(e)}
                        ref={this.phone} 
                        placeholder='Phone'
                        >
                        </input>
                    </label>
                </fieldset>
                <div className="is-grouped">
                <button className="button" onClick={this.submitHandler} disabled={!this.state.showButton} >Добавить</button>
                <button className="button" onClick={this.props.cancelHandler}>Отмена</button>
                </div>
            </form>
        </Fragment>
    )
    }
}

export default AddNewUser