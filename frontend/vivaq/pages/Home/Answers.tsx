


const Answer = (props: any) =>
{

  
  return (
    <div className="pt-2">
      <div className="bg-gray-100  pl-3 pr-3 mb-2">
              <h1 className="inline opacity-70">{props.data != null? props.data.answer: null}</h1>
              <p className="italic text-sm pb-2 text-right mb-2">Author : {props.data.author != null ? props.data.author : null}</p>
      </div>
    </div>
  )
}

export default Answer;