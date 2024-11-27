import { useState } from 'react'
import { Button, Container, Form, Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [responses, setResponses] = useState({
    form1: { message: '', status: '' },
    form2: { message: '', status: '' },
    form3: { message: '', status: '' }
  })

  const [formData, setFormData] = useState({
    form1: { value1: '', value2: '' },
    form2: { value1: '', value2: '' },
    form3: { value1: '', value2: '' }
  })

  const handleInputChange = (formId, field, value) => {
    setFormData(prev => ({
      ...prev,
      [formId]: {
        ...prev[formId],
        [field]: value
      }
    }))
  }

  const handleSubmit = async (formId) => {
    try {
      if (formId === 'form1') {
        // Create FormData object
        const formDataObj = new FormData()
        formDataObj.append('model', formData[formId].value1)
        formDataObj.append('year', formData[formId].value2)

        // Make API call
        const response = await fetch('http://localhost:5567/api/calculateCarValue', {
          method: 'POST',
          body: formDataObj,
        })

        if (!response.ok) {
          throw new Error('API request failed')
        }

        const data = await response.json()
        
        setResponses(prev => ({
          ...prev,
          [formId]: {
            message: `Car Value: $${data.car_value.toLocaleString()}`,
            status: 'success'
          }
        }))
      } else if (formId === 'form3') {
        // Create FormData object for quote generation
        const formDataObj = new FormData()
        formDataObj.append('car_value', formData[formId].value1)
        formDataObj.append('risk_rating', formData[formId].value2)

        // Make API call
        const response = await fetch('http://localhost:5567/api/generateQuote', {
          method: 'POST',
          body: formDataObj,
        })

        if (!response.ok) {
          throw new Error('API request failed')
        }

        const data = await response.json()
        
        setResponses(prev => ({
          ...prev,
          [formId]: {
            message: `Monthly Premium: $${data.monthly_premium.toFixed(2)}\nYearly Premium: $${data.yearly_premium.toFixed(2)}`,
            status: 'success'
          }
        }))
      } else {
        // Handle other forms as before
        const response = {
          message: `Received values: ${formData[formId].value1} and ${formData[formId].value2}`,
          status: 'success'
        }
        setResponses(prev => ({
          ...prev,
          [formId]: response
        }))
      }
    } catch (error) {
      setResponses(prev => ({
        ...prev,
        [formId]: {
          message: `Error: ${error.message}`,
          status: 'error'
        }
      }))
    }
  }

  const renderResponseArea = (formId) => {
    const response = responses[formId]
    if (!response.message) return null

    const statusColors = {
      success: 'bg-green-50 border-green-200 text-green-700',
      error: 'bg-red-50 border-red-200 text-red-700',
      default: 'bg-gray-50 border-gray-200 text-gray-700'
    }

    const colorClass = statusColors[response.status] || statusColors.default

    return (
      <div className={`mt-6 p-4 rounded-lg border ${colorClass}`}>
        <Header as="h3" className="text-lg font-semibold mb-2">
          Response
        </Header>
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {response.message}
        </pre>
      </div>
    )
  }

  const renderForm = (formId, title) => (
    <Segment padded className="w-full max-w-2xl mx-auto mb-8 shadow-lg">
      <Header as="h2" className="text-xl font-bold mb-4">
        {title}
      </Header>
      <Form>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Form.Input
            fluid
            label={formId === 'form1' ? "Car Model" : formId === 'form3' ? "Car Value" : "First Value"}
            placeholder={formId === 'form1' ? "Enter car model" : formId === 'form3' ? "Enter car value" : "Enter first value"}
            value={formData[formId].value1}
            onChange={(e) => handleInputChange(formId, 'value1', e.target.value)}
            className="flex-1"
          />
          <Form.Input
            fluid
            label={formId === 'form1' ? "Year" : formId === 'form3' ? "Risk Rating" : "Second Value"}
            placeholder={formId === 'form1' ? "Enter year" : formId === 'form3' ? "Enter risk rating (1-5)" : "Enter second value"}
            value={formData[formId].value2}
            onChange={(e) => handleInputChange(formId, 'value2', e.target.value)}
            className="flex-1"
            type={formId === 'form1' || (formId === 'form3') ? "number" : "text"}
          />
        </div>
        <Button
          primary
          onClick={() => handleSubmit(formId)}
          className="w-full md:w-auto"
        >
          Submit
        </Button>
      </Form>
      {renderResponseArea(formId)}
    </Segment>
  )

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Container>
        <div className="flex flex-col items-center">
          <Header as="h1" className="text-3xl font-bold mb-8 text-center">
            API Testing Interface
          </Header>
          
          {renderForm('form1', 'API 01 - Car Value Calculator')}
          {renderForm('form2', 'API 02')}
          {renderForm('form3', 'API 03 - Quote Generator')}
        </div>
      </Container>
    </div>
  )
}

export default App
