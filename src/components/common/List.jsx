import listS from '@/assets/scss/common/list.module.scss'

// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
const List = ({list,keys}) => {  
    return ( 
        <div  className={listS.list_wrap}> 
            <div className={listS.list_content}> 
                <div className={listS.list_title}>
                    <span>{list.title}</span>
                    <div className={listS.list_btn}> 
                        <div className={`${listS.list_btn_left} prev_${keys}`}>
                            <img src="/images/common/left.png" alt="왼쪽" />
                        </div>
                        <div className={`${listS.list_btn_right} next_${keys}`}>
                            <img src="/images/common/right.png" alt="오른쪽" />
                        </div>
                    </div> 
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        prevEl: `.prev_${keys}`,
                        nextEl: `.next_${keys}`,
                      }} 
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    > 
                        {
                         list.list.map((item) => (   
                                <SwiperSlide key={item.id}>
                                    <ul className={listS.list_ul} >
                                    {item.content.map((item2,id)=>( 
                                        <li key={id}>
                                            <p>{item2.label}</p>
                                            <span>{item2.brand}</span>
                                        </li>
                                    ))}
                                    </ul>
                                </SwiperSlide>   
                            ))
                        }
                </Swiper>  
            </div>  
        </div>
    );
};

export default List;