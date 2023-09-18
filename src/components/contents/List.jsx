import list from '@/assets/scss/contents/list.module.scss'
import { data } from '@/api/List'
const List = ({ mainNav, subNav }) => {

  return (
    <section className={list.list_wrap}>
      <ul className={list.list_ul}>
        {
          data.brand.map((item) => { 
            return ( 
              <li key={item.id}>
                <div className={list.list_content}> 
                  <div className={list.list_write}>
                    <div>
                      <img src={item.profileImg} alt={item.profileName} />
                      <span>{item.smallCategory1}</span>
                      <span>{item.smallCategory2}</span>
                    </div>
                    <span>{item.uploadTime}</span>
                  </div>
                  <div className={list.list_label}>
                    <div>
                      <p>{item.label}</p>
                      <p>{item.subLabel}</p>
                    </div>
                    <div>
                      <img src={item.contentImg} alt={item.smallCategory2} />
                    </div>
                  </div>
                  <div className={list.list_sympathy}>
                    <div>
                      <button>공감</button>
                      <button>댓글</button>
                    </div>
                    <div>
                      <img src={item.Favorites}></img>
                    </div>
                  </div> 
                </div>
            </li>
            )
          })
        }
      </ul>
    </section>
  )
}
export default List