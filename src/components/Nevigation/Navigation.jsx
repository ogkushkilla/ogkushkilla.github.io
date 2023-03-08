import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice'
import { API_URI } from '../../const'
import { Container } from '../Container/Container'
import classNames from 'classnames'
import style from './Navigation.module.css' 

export const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync());
  }, [])

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) =>
            <li className={style.item}>
              <button 
                className={classNames(style.button, 
                activeCategory === i ? style.button_active : "")}
                style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({indexCategory: i}))
                }}
              >
                {item.rus}
              </button>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  )
}