import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { productRequestAsync } from '../../store/product/productSlice'
import { Container } from '../Container/Container'
import { Order } from '../Order/Order'
import { CatalogProduct } from '../CatalogProduct/CatalogProduct'
import style from './Catalog.module.css'

export const Catalog = () => {
  const {products} = useSelector(state => state.product)
  const {category, activeCategory} = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    if (category.length)
      dispatch(productRequestAsync(category[activeCategory].title))
  }, [category, activeCategory])

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            {products.length ? (
              <ul className={style.list}>
                {products.map(item => {
                    return (
                      <li key={item.id} className={style.item}>
                        <CatalogProduct item={item} />
                      </li>
                    )
                  }
                )}
              </ul>
            ) : (
              <ul className={style.list}>
                <li className={style.empty_item}>
                  К сожалению товаров данной категории нет
                </li>
              </ul>
            )}
            <ul className={style.list}>
              {products.map(item => {
                  return (
                    <li key={item.id} className={style.item}>
                      <CatalogProduct item={item} />
                    </li>
                  )
                }
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}