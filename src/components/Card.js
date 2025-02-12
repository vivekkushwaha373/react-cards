import React from 'react'
import { FcLike } from 'react-icons/fc'
import { toast } from 'react-toastify'
import { FcLikePlaceholder } from "react-icons/fc";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    
    function clickHandler() {
        if ( likedCourses.includes(course.id) ) {
            setLikedCourses((prev)=>(prev.filter(((cid)=>cid!==course.id))))
            toast.warning("like removed");    
        }
        else
        {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked coures me
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else
            {
                setLikedCourses((prev) => [...prev, course.id]);   
            }
            toast.success("Liked Successfully");
        }
    }
    return (
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
          <div className="relative">
              <img src={course.image.url} alt="" />
            <div className="w-[30px] h-[30px]  bg-white rounded-full absolute right-2 bottom-[-10px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ?  <FcLike fontSize="1.25rem" />:<FcLikePlaceholder fontSize="1.25rem"/>
                        }
                    </button>
            </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                {
                   course.description.length>100 ? (course.description.substr(1,100)+"..."):(course.description)        
                }
                </p>
            </div>
    </div>
  )
}

export default Card
