 

export const userInitial = {
    isLogin: JSON.parse(window.localStorage.getItem("login")) || false, 
    loginId: JSON.parse(window.localStorage.getItem("loginId")) || ''
   }
export const listInitial = {
    mainNav: 1,
    subNav: 1,
    profileModal: false
}

export const userReducer = (state = userInitial, action) => {
    console.log(state, action)
    switch(action.type) { 
        case 'LOGIN': 
            return { 
                isLogin: localStorage.setItem("login", JSON.stringify(true)) || true,
                loginId:localStorage.setItem("loginId", JSON.stringify(action.payload)) || action.payload
            }
        case 'LOGOUT': 
            return { 
                isLogin: window.localStorage.removeItem("login"),
                loginId: window.localStorage.removeItem("loginId")
             } 
        case 'CREATE_WRITE':
            return{

            }
        default: 
            throw new Error("Doesn't have action type");
    }
} 


export const listReducer = (state = listInitial, action) => { 
    console.log(state, action)
    switch(action.type) { 
        case 'CATEGORY': 
          return { 
            mainNav: Number(action.payload.mainNav) || Number(state.mainNav),
            subNav: Number(action.payload.subNav) || Number(state.subNav)
          }   
        default:  
          throw new Error("Doesn't have action type");
    }
  }
  