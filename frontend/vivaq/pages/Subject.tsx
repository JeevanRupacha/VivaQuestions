import Questions from '../src/Questions'
import {useQuery} from 'react-query'
import Header from './Home/Header'
import { useRouter } from 'next/router'
import { getQuestions, addQuestion } from '../src/api'
import React, { useState, useRef } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import {v4 as uuidv4} from 'uuid'



const Subject = () => {
  
  const [showForm, setForm] = useState(false)
  const submitBtnRef = useRef<HTMLButtonElement>(null)
  const [question, setQuestion] = useState('')
  const [author, setAuthor] = useState('')
  
  const router = useRouter()

  const onChangeTextArea = (event : any) => {
   setQuestion(event.target.value)
  }
  const onChangeInput = (event : any) => {
   setAuthor(event.target.value)
  }

  const queryClient = useQueryClient()

  const mutation = useMutation(addQuestion, {
    onSuccess : () => queryClient.invalidateQueries("fetch_questions")
  })


  const submitQuestion = ()=>
  {
  
    if (question == '' || author == '') {
    alert("Input Fields Can't be Empty !")
    } else {
      
    mutation.mutate({ 'id': uuidv4(), question, 'author': author, subjectId: router.query.id })
    // console.log(props.data)
    setQuestion('')
    setAuthor('')
  }  
  }

  const questionForm = () => {
    /**
     *  Generates the form for the input of answer and author .
     */
    if (showForm)
    {
      submitQuestion()
      setForm(false)
      if (submitBtnRef != null)
      {
        submitBtnRef!.current!.innerText = "Submit Question"
      }
    } else {
      setForm(true)

      //changing the Text of button to submit .
      if (submitBtnRef != null)
      {
        submitBtnRef!.current!.innerText = "Submit"
      }
    }
  }


  const toSubjectList = () => {
    router.push({
      pathname: "/Home/home",
    })
  }


  const { isLoading, error, data } = useQuery(["fetch_questions",router.query.id], getQuestions)
  

  if (isLoading)
  {
    console.log("loading the data ")
    return <div></div>
  }
  
  if (error)
  {
    console.log("error ", error)
    return <div></div>
  }

  return (
    <div className="mt-4">
      <Header/>
    <div className="mt-8 p-4">
        <button onClick={toSubjectList} className="pb-1 hover:opacity-70 mb-8 bg-gray-100 pl-7 pr-6 opacity-90 rounded-sm">Subject List</button>
      <h1 className="text-center underline text-2xl pr-4 pb-4">{router.query != null ? router.query.title : null}</h1>
        
        <div className={showForm ? "visible": "hidden"}>
          <textarea  value={question} onChange={onChangeTextArea} rows={7} className="focus:outline-white pl-4 pt-2 answerForm bg-gray-100"></textarea>
          <form>
            <input value={author} onChange={onChangeInput} type="text" placeholder="Author" className="auhtor focus:outline-none pl-2 bg-gray-100 mb-2"/>
          </form>
        </div>
        <button onClick={questionForm} ref={submitBtnRef} className="mb-4 mt-4 bg-yellow-500 text-gray-50 rounded-sm hover:opacity-70 pl-2 pr-2 pb-1">Submit Your Question</button>
        {
          data != null && typeof data != "undefined" ?
            data.map((question: any) => {
              return <Questions key={uuidv4()} data={question}/>
              // console.log(question)
            }) : null
        }
      </div>
      <style jsx>{`
          .answerForm {
            width: 100%;
          }

          .author{
            width: 40%;
          }
        `}
        </style>
    </div>
  )
}

export default Subject;