import React , {useRef} from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getSubjectList } from '../../src/api'
import { useRouter } from 'next/router'
import { addSubject } from '../../src/api'
import { v4 as uuidv4 } from 'uuid'


const SubjectList = () => {

  const [subject, setSubject] = React.useState('')
  const [show, setShow] = React.useState(false)

  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery('subjectList', getSubjectList)

  const mutation = useMutation(addSubject, {
    onSuccess: () => {
      queryClient.invalidateQueries('subjectList')
    }
  })

  
  const router = useRouter()
  const submitBtnRef = useRef(null)

  const onChangeInput = (event : any) => {
    setSubject(event.target.value)
  }

  const onClickSubmit = () => {
    setShow(!show)

    if (show)
    {
      if (subject != '')
      {   
        mutation.mutate({ id: uuidv4(), title: subject })
        setSubject('')
      }
      else {
        alert("Input field can't be empty ! ")
      }
    }
  }


  const onClickSubject = (props : any) => {
    router.push({
      pathname: "/Subject",
      query: props
    })
  }

  return (
    <div className="">
      <div className="bg-gray-100 rounded-md">
        {
        data != null && typeof data != 'undefined' ?
        data.map( (subject: any) => {
        return (<div key={subject.id} onClick={() => onClickSubject(subject)} className="hover:bg-gray-50 w-full text-center text-gray-800 cursor-pointer block xl:pl-4 pt-1 pb-3 text-3xl rounded-sm ">{subject.title}</div>)
      }) : <div><h1>No Data </h1></div>
        }
        
        <div className={show ? 'visible': 'hidden'}>
          <form>
            <input value={subject} onChange={onChangeInput} type="text" placeholder="Enter Subject "  className="w-full focus:outline-none pl-2 pt-2 pb-2 ml-2 mr-4 mt-4  bg-white mb-2" />
          </form>
        </div>
      </div>
      <button onClick={onClickSubmit} ref={submitBtnRef} className="hover:opacity-70 ml-2 mt-4 bg-blue-400 rounded-sm pt-1 pb-1 pl-4 pr-4 text-gray-100">Add Subject</button>
    </div>
  )
}

export default SubjectList