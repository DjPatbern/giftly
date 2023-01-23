import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";



const ShareSource = () => {


  // SUGGESTED GIFT LIST DATA
    const [SuggestedGiftList] = useState([
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUwOTlf/gift-added.png",
        name: 'Air force Max',
        price: 2000,
        id: 1,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDBf/giftimg1.png",
        name: 'Birkins bag',
        price: 2000,
        id: 2,
        pushGift: false,
        desired: false
        
        
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDZf/giftimg6.png",
        name: 'Toy',
        price: 2000,
        id: 3,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDVf/giftimg5.png",
        name: 'Air force Max',
        price: 2000,
        id: 4,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDNf/giftimg4.png",
        name: 'Air force Max',
        price: 2000,
        id: 5,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDJf/giftimg3.png",
        name: 'Air force Max',
        price: 2000,
        id: 6,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDFf/giftimg2.png",
        name: 'Birkins bag',
        price: 2000,
        id: 7,
        pushGift: false,
        desired: false
      },
      { purchaseLink: "https://puristorganics.com/product-",
        image: "https://od.lk/s/M18yODY2NzUxMDBf/giftimg1.png",
        name: 'Toys',
        price: 2000,
        id: 8,
        pushGift: false,
        desired: false
      }
    ])

    // FIELD VALUES OF THE WISH LIST INPUTS
    const newWishList = {
      wishListName: "",
      description: "",
      wishName: "",
      purchaseLink: "",
      price: "",
      wishDescription: "",
      quantity: "",
      privacy: "",
    };


    const [wishList, setwishList] = useState(newWishList); //STATE TO HOLD WISH LIST VALUES
    const [moreOptions, setMoreOptions] = useState(false); // STATE TO TOGGLE MORE WISH LIST OPTION
    const [privacyToggle, setPrivacyToggle] = useState(false) //STATE TO TOGGLE PRIVACY OPTION
    const [addedMoreOptions, setAddedMoreOptions] = useState(false); // STATE TO TOGGLE MORE OPTIONS FROM SUGGESTED WISH
    const [addImage, setAddImage] = useState(false); //STATE TO ADD IMAGE TO WISH LIST
    const [suggest, setSuggest] = useState([]) //STATE TO HOLD USER'S WISH LIST ADDED FROM SUGGESTED WISH 
    const [mostDesrired, setMostDesired] = useState(false) //STATE TO MARK A WISH LIST AS MOST DESIRED

  // LOGIC TO ADD WISH LIST FIELD WHEN USER CLICK 'ADD ANOTHER'
  const [addArr, setAddArr] = useState([])
  const pushArr =  { id: 1,
    show: false,
  desired: false,
addImage: false}

    const handleAddData = (pushArr) => {
      
      setAddArr([...addArr, pushArr]);
    }


    // ADDING WISH LIST FIELD VALUES TO THE WISH LIST STATE
    const {
      wishListName,
      description,
      wishName,
      purchaseLink,
      price,
      wishDescription,
      quantity,
      privacy,
    } = wishList;


    //SUGGESTS
    // LOGIC TO ADD CLICKED BY THE USER AT SUGGESTED PAGE TO THE USER'S WISH LIST
    const addSuggest = async (product) => {
      let findSuggest = await suggest.find((i) => {
        return i.id === product.id;
      });

      if (findSuggest) {
        let newSuggest = [];
        let newItem;
  
        suggest.forEach((suggestedItem) => {
          if (suggestedItem.id === product.id) {
            newItem = {
              ...suggestedItem,
              quantity: suggestedItem.quantity + 1,
              totalAmount: suggestedItem.price * (suggestedItem.quantity + 1),
            };
            newSuggest.push(newItem);
          } else {
            newSuggest.push(suggestedItem);
          }
        });

        setSuggest(newSuggest);
      } else {
        let addingProduct = {
          ...product,
        
        };
        setSuggest([...suggest, addingProduct]);
      }
    };

    
  // LOGIC TO REMOVE A CLICKED WISH FROM SUGGESTED WISH LIST FROM THE USER'S WISH LIST
    const removeSuggest = async(product) => {
      const newCart = suggest.filter(cartItem => cartItem.id !== product.id);
      setSuggest(newCart)
    }
    

    const navigate = useNavigate();

    // LOGIC TO SAVE THE INPUT FILL LIST TO THE WISHLIST STATE
    const handleChange = (e) => {
      setwishList({ ...wishList, [e.target.name]: e.target.value });
    };
  
    // LOGIC TO SAVE THE PRIVACY OPTION TO THE WISHLIST STATE
    const handlePrivacy = (e) => {
      setwishList({ ...wishList, privacy: e.target.value });
    };
  
    //LOGIC TO SAVE THE WISH LIST PROCESS
    const handleShare =  (e) => {
      e.preventDefault();
      if(wishListName && (wishName || suggest.length > 0 || addArr.length > 0)){
        navigate("/welcome");
      } else if(!wishListName){
       return toast.error('Please name your wish')
      }else if(!wishName || suggest.length === 0){
       return toast.error('Please add at least one item ')
      }else{
        return toast.success("Wish list is saved")
      }
  
    }
  

    //LOGIC TO DELETE WISH LIST
    const handleDelete = (e) => {
      e.preventDefault();
      setwishList(newWishList)
      setAddImage(false)
      setSuggest([])
      setAddArr([])
    }

   

    //LOGIC TO DELETE ALL SUGGESTED WISH FROM THE USER'S WISH LIST
    const clearSuggestions = (e) =>{
      setSuggest([])
    }

    return{ SuggestedGiftList, wishList,
      handleShare,handleDelete,handlePrivacy,handleChange,      
      wishListName,
      description,
      wishName,
      purchaseLink,
      price,
      wishDescription,
      quantity,
      privacy,
      moreOptions, 
      setMoreOptions,privacyToggle, 
      setPrivacyToggle,addedMoreOptions, 
      setAddedMoreOptions,
      addImage, setAddImage,addSuggest,suggest,
      clearSuggestions,mostDesrired, 
      setMostDesired, removeSuggest,addArr, setAddArr, pushArr, handleAddData
     }
}

const ShareContext = createContext([])

export function useShareContext(){
    return useContext(ShareContext)
  }



export const UseShare = ({children}) => {



  return (
    <ShareContext.Provider value={ShareSource()}>
      {children}
    </ShareContext.Provider>
  )
}

