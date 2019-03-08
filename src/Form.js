import React from "react"

class ProfileForm extends React.PureComponent{

    render() {
        const {user, onChange} = this.props

    return(
        <div className="profile-form">
          <EntityData source={user} onChange={onChange}>
             <StringField label="Name" path="Name" />
             <StringField label="E=mail" path="email" />
             <StringField label="Phone" path="Phone">
           </EntityData>
        </div>
    );
 }

}


export default Form