import {useContext} from "react";
import {EachProductDetailsData} from "../DetailsEachProduct";

export const AnswerOfHaveSmartPhone = () =>
{
    const {stepHaveOldPhone , choicesAnswer} = useContext(EachProductDetailsData)

    return (
        <>
            <p className='font-bold text-lg mt-3'>Do you have a smartphone to trade in with Apple?</p>
            <div className='flex justify-center items-center gap-3'>
                {
                    ['Yes' , 'No'].map(answer => {
                            return (
                                <div key={answer}
                                     onClick={()=>stepHaveOldPhone(answer)}
                                     className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveOldPhone === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                            )
                        }
                    )
                }
            </div>
        </>
    )
}

export const AnswerOfHaveGoodCondition = () =>
{
    const {stepCondition , setEditAnswer , choicesAnswer} = useContext(EachProductDetailsData)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                    stepCondition(answer)
                                    setEditAnswer(answer)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveGoodCondition === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}

export const AnswerOfButtonWork = () =>
{
    const {stepHaveButtonWork , setEditAnswer , choicesAnswer} = useContext(EachProductDetailsData)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                    stepHaveButtonWork(answer)
                                    setEditAnswer(answer)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveButtonWork === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}


export const AnswerOfGoodShape = () =>
{
    const {stepHaveGoodShape , setEditAnswer  , choicesAnswer} = useContext(EachProductDetailsData)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                    stepHaveGoodShape(answer)
                                    setEditAnswer(answer)
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveGoodShape === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}



export const AnswerOfTochScreenWork = () =>
{
    const {stepHaveTochScreenWork , setEditAnswer , choicesAnswer} = useContext(EachProductDetailsData)

    return (
        <div className='flex justify-start items-center gap-4 mt-3'>
            {
                ['Yes' , 'No'].map(answer => {
                        return (
                            <div key={answer}
                                 onClick={()=> {
                                    stepHaveTochScreenWork(answer)
                                    setEditAnswer('Yes')
                                 }}
                                 className={`w-48 h-14 text-xl flex flex-col justify-center items-center gap-2 rounded-xl border border-gray-400 ${choicesAnswer.haveTochScreenWork === answer && 'border-2 border-blue-600'}`}> {answer}</div>
                        )
                    }
                )
            }
        </div>
    )
}

