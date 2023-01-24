import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const InterestDataSource =() => {

  // STATE OF USER INTEREST DATA
    const  [UserInterestList] = useState([
        { name: 'Women Fashion',
         id: 1, pushInterest: false},
         {name: 'Men fashion',
         id: 2, pushInterest: false},
         {name: 'Shoes',
         id: 3, pushInterest: false},
         {name: 'Skin care',
         id: 4, pushInterest: false},
         {name: 'Sports',
         id: 5, pushInterest: false},
         {name: 'Gadgets',
         id: 6, pushInterest: false},
         {name: 'Jewelry & watches',
         id: 7, pushInterest: false},
         {name: 'Beauty & Hair',
         id: 8, pushInterest: false},
         {name: 'Bags & Shoes',
         id: 9, pushInterest: false},
         {name: 'Education & books',
         id: 10, pushInterest: false},
         {name: 'tools',
         id: 11, pushInterest: false},
         {name: 'Food',
         id: 12, pushInterest: false}
     ])



     const [interests, setInterests] = useState([]) //STATE TO HOLD ALL USER'S THE ADDED INTEREST
     const [userName, setUserName] = useState("") //STATE TO HOLD USERNAME WHEN SET BY USER

     //USERNAME 

     const handleUserName = (e) => {
        e.preventDefault()
        if(userName.length > 0){
          navigate('/dashboard/interest')
        }
      }

    //   INTEREST


     const handleInterest = (e) => {
        e.preventDefault()
        if(interests.length >= 5){
          navigate('/dashboard')
          
        }
      }

      // LOGIC TO PUSH A USER'S SELECTED INTEREST TO IT'S UNIQUE INTEREST DATABASE

      const addInterest = async (Interest) => {
        let findInterest = await interests.find((i) => {
          return i.id === Interest.id;
        });
  
        if (findInterest) {
          let newInterest = [];
          let newItem;
    
          interests.forEach((InterestedItem) => {
            if (InterestedItem.id === Interest.id) {
              newItem = {
                ...InterestedItem,
              };
              newInterest.push(newItem);
            } else {
              newInterest.push(InterestedItem);
            }
          });
  
          setInterests(newInterest);
        } else {
          let addingInterest = {
            ...Interest,
            
          };
          setInterests([...interests, addingInterest]);
        }
      };

      // LOGIC TO REMOVE AN ALREADY ADDED INTEREST
    
      const removeInterest = async(Interest) => {
        const newInterest = interests.filter(newItem => newItem.id !== Interest.id);
        setInterests(newInterest)
      }
      
      const navigate = useNavigate();

      return{UserInterestList,
        handleInterest,addInterest,interests, removeInterest, userName, 
        setUserName, handleUserName}

}

const InterestContext = createContext([])

export function useInterestContext(){
    return useContext(InterestContext)
  }

export const UseInterest = ({children}) => {
  return (
    <InterestContext.Provider value={InterestDataSource()}>
      {children}
    </InterestContext.Provider>
  )
}

export default InterestContext
