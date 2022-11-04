import './App.css';
import React from 'react';
const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e8ebee",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "#007bff",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  // const labelStyles = {
  //   padding: 5,
  //   color: 'white',
  //   fontWeight: 'bold'
  // }

  return (
    <div style={containerStyles} className='form-progress-bar-wrapper'>
      <div style={fillerStyles} className='form-progress-bar'>
      </div>
    </div>
  );
};

const App = () => {
  const [documentName, setDocumentName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [progress, setProgress] = React.useState(0)
  const [category, setCategory] = React.useState("")
  const [documentType, setDocumentType] = React.useState("")
  const types = ['','Plain', 'PDF']
  const categories = ['','Audit', 'Application', 'Other']

  // const validateState = () => {
  //   console.log('Hi')
  //   let count = 0
  //   if (documentName !== "") {
  //     count++
  //   }

  //   if (category !== "") {
  //     count++
  //   }

  //   if (documentType !== "") {
  //     count++
  //   }
  //   console.log(email)
  //   setProgress(count*25)
  // }
  const validate = (id,value) => {
    
    let docNameCount = 0
    let docNameVal = id === 'documentName' ? value : documentName
    if (docNameVal !== '')
      {
        docNameCount = 25
      }
    
    let docTypeCount = 0
    let docTypeVal = id === 'documentType' ? value : documentType
    if (docTypeVal !== '')
      {
        docTypeCount = 25
      }

    let categoryCount = 0
    let categoryVal = id === 'category' ? value : category
    if (categoryVal !== '')
      {
        categoryCount = 25
      }

    let emailCount = 0
    let emailVal = id === 'email' ? value : email
    if (emailVal !== '')
      {
        categoryCount = 25
      }
  

    setProgress(docNameCount+docTypeCount+categoryCount+emailCount)
  }
  const updateForm = e => {
    console.log(e)
    if (e.target.id === 'documentName')
    {
      setDocumentName(e.target.value)
    }

    if (e.target.id === 'category')
    {
      setCategory(e.target.value)
    }

    if (e.target.id === 'email')
    {
      setEmail(e.target.value)
    }

    if (e.target.id === 'documentType')
    {
      setDocumentType(e.target.value)
      
    }

    
    validate(e.target.id,e.target.value)
  }
  return (
    <div className="App">
      <div className='container'>
      <div>Form Completion:</div>
      <ProgressBar completed={progress}/>
      <div className='form-container'>
        <label htmlFor='documentType' className='form-label'>Document Type</label>
        <select className='form-document form-select' value={documentType} id='documentType'  onChange={e => updateForm(e)}>
         { types.map(docType => <option value={docType} key={docType} disabled={docType === '' ? true : null}>{docType}</option>)}
        </select>
        
        <label htmlFor='documentName' className='form-label'>Document Name</label>
        <input type="text" name="documentName" id='documentName' className='form-document' value={documentName} onChange={e => updateForm(e)}/>
        
        <label htmlFor='category' className='form-label'>Category</label>
        <select className='form-document form-select' value={category} id='category'  onChange={e => updateForm(e)}>
         { categories.map(category => <option value={category}  key={category} disabled={category === '' ? true : null}>{category}</option>)}
        </select>

        <label htmlFor='email' className='form-label'>Email</label>
        <input type="email" name="email" id='email' className='form-document' value={email} onChange={e => updateForm(e)}/>
      </div>

      </div>
      
      
    </div> 
  );
}

export default App;


// defaultValue={''}