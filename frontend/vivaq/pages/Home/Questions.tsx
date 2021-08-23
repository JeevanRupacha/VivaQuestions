import React , {useState, useRef} from 'react'
import Answers from './Answers'
import { useQuery } from 'react-query'
import { getAnswers, addAnswer } from '../../src/api'
import { useMutation ,useQueryClient} from 'react-query'
import {v4 as uuidv4} from 'uuid'


const Questions = (props: any) => {

  const [show, setShow] = useState(false)
  const [showForm, setForm] = useState(false)
  const submitBtnRef = useRef<HTMLButtonElement>(null)

  const [answer, setAnswer] = useState('')
  const [author,setAuthor] = useState('')

  const submitAnswer = ()=>
  {
    
    if(answer == '' && showForm == true || author == '') {
      alert("Input field can't be empty !")
    } else {
 
      mutation.mutate({'id': uuidv4(), answer, 'author': author, questionId: props.data.id})
    }
  }

  const answerForm = () => {
    /**
     *  Generates the form for the input of answer and author .
     */
    if (showForm)
    {
      submitAnswer()
      setForm(false)
      if (submitBtnRef != null)
      {
        submitBtnRef!.current!.innerText = "Add Answer"
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

  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery(["fetch_answers", props.data.id], getAnswers)
  const mutation = useMutation(addAnswer, {
    onSuccess: ()=> queryClient.invalidateQueries("fetch_answers")
  })
 
  
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

  const onChangeTextArea = (event : any) => {
   setAnswer(event.target.value)
  }
  const onChangeInput = (event : any) => {
   setAuthor(event.target.value)
  }


  return (
    <div className="mb-3">
      <h1 className="inline opacity-70 pl-1">{props.data!= null? props.data.question : null}</h1>
      <p className="bg-blue-300 text-sm ml-2 pl-1 pr-1 rounded-lg align-middle inline cursor-pointer" onClick={() => setShow(!show)}>Answer</p>
      <p className="text-right pr-1 opacity-70 italic text-xs ">{props.data.author != null? props.data.author: ''}</p>
      <div className={show ? "visible" : "hidden"}>
        {
          data != null && typeof data != "undefined" ?
            data.map((answer: any) => {
              return <Answers key={answer.id} data={answer}/>
            }) : null
        }
        <div className={showForm ? "visible": "hidden"}>
          <textarea onChange={onChangeTextArea} rows={7} className="focus:outline-white mt-2 pl-4 pt-2 answerForm bg-gray-100"></textarea>
          <form>
            <input onChange={onChangeInput} type="text" placeholder="Author" className="focus:outline-none pl-2 bg-gray-100 mb-2"/>
          </form>
        </div>
        <button onClick={answerForm} ref={submitBtnRef} className=" bg-blue-300 mb-4 pl-2 pr-2 pt-1 pb-1 rounded-sm text-sm font">Add Answer</button>
      </div>
       <style jsx>{`
          .answerForm {
            width: 100%;
          }
        `}
        </style>
    </div>

   
  )
}

export default Questions