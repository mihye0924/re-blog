// 좋아요
export const handleLike = (item, datas, setDatas) => { 
    item.good = !item.good 
    window.localStorage.setItem("list", JSON.stringify(datas))
    setDatas([...datas])  
} 

// 북마크
export const handleFavorite = (state, item, datas, setDatas) => {
    if(state.isLogin) {
        item.favorite = !item.favorite
        setDatas([...datas]) 
        window.localStorage.setItem("list", JSON.stringify(datas))
    }else {
        alert('로그인이 필요합니다.')
    }
}  

//  리스트 - 카테고리 별 네비게이션 
export const categoryNav = (item, state2) => {  
    if (state2.mainNav === 1) {
        return item.middleCategory === state2.subNav
    } else if (state2.mainNav === 2) {
        return true
    } else {
        return item.lagreCategory === state2.mainNav
    } 
}
  
// 리스트 - url 주소 확인 후 detail페이지로 값 보내기
export const handleLink = (item, navigate) => { 
    if (item.lagreCategory && item.middleCategory) {
    navigate(`detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`) 
    } else {
    navigate(`detail/${item.lagreCategory}/0/${item.id}`)
    } 
    console.log(navigate,"네비")
}
 
// 리스트 - 타이머
export const handleTimer = (count, setCount, localData) => { 
    if(localData) {
        localData.forEach((item) => {
            if(count >= 59) {
                item.uploadTime +=1
                window.localStorage.setItem("list", JSON.stringify(localData))
                setCount(0);
            } 
        }) 
    } 
}

// 리스트 - 로컬 데이터 가져오기
export  const handleLocalGetItem = (state, localData, setDatas) => {   
    if(localData){ 
      localData.forEach((item) => {
        if(!state.isLogin && item.favorite) {
          item.favorite = !item.favorite
        }
      })     
      setDatas(localData)
    }
}
 
// 프로필 리스트 - 카테고리 별 네비게이션
export const categoryProfileNav = (item, state2) => { 
    if (state2.mainNav === 1) {
    return true
    } else if (state2.mainNav === 2) {
    return false
    } else if(state2.mainNav === 3) {
    return item.favorite === true
    }
}

// 프로필 리스트 - url 주소 확인 후 detail페이지로 값 보내기
export const handleProfileLink = (item, navigate) => { 
    if (item.lagreCategory && item.middleCategory) {
    navigate(`/detail/${item.lagreCategory}/${item.middleCategory}/${item.id}`, { replace: true })
    } else {
    navigate(`/detail/${item.lagreCategory}/0/${item.id}`, { replace: true })
    }   
}

// 프로필 리스트 - 로컬 데이터 가져오기
export const handleProfileLocalGetItem = (localData, setDatas) => {    
    if(localData){     
        setDatas(localData)
    } 
} 
