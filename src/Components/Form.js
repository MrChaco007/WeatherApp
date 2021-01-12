import React from "react"

const Form = (props) => {
    const [formData, setFormData] = React.useState({
        searchterm:""
    })
    const handleChange = (event) => {
    setFormData({...formData, [event.target.name]:event.target.value})
}

    const handleSubmit = (event) => {
        event.preventDefault()
        props.getWeather(formData.searchterm)
}


    return (<div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange}/>  
            <input type="submit" value="Search"/>
         </form>
</div>
)

}

export default Form