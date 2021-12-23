import React,{ Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div align ="center">
                <div>
                    <p><b>Form</b></p>
                    <label htmlFor = "Name Of Holder"> Name Of Holder   </label>
                    <input type="text"onChange={(e)=>{this.setState({NameOfHolder :e.target.value})}}/><br></br>
                    
                    <label htmlFor = "DOB"> DOB </label>
                    <input type="text"onChange={(e)=>{this.setState({DOB:e.target.value})}}/><br></br>
                    
                    <label htmlFor = "EducationalQualifications"> EducationalQualifications </label>
                    <input type="text"onChange={(e)=>{this.setState({EducationalQualifications:e.target.value})}}/><br></br>
                    
                    <label htmlFor = "University"> University </label>
                    <input type="text"onChange={(e)=>{this.setState({University:e.target.value})}}/><br></br>
                    
                    <label htmlFor = "Credits"> Credits </label>
                    <input type="text"onChange={(e)=>{this.setState({Credits:e.target.value})}}/><br></br>
                    
                    <input type="file" id="actual-btn"/>
                    <label for="actual-btn">Choose File</label>

                    <button type= "submit">Submit</button><br></br>
                </div>
            </div>
        )
    }
}
export default Form;