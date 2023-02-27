import { Container } from '../Container/Container'
import { Order } from '../Order/Order'
import { CatalogProduct } from '../CatalogProduct/CatalogProduct'
import style from './Catalog.module.css'

const goodsList = [
  { key: 1, title: 'Мясная бомба' },
  { key: 2, title: 'Супер сырный' },
  { key: 3, title: 'Сытный' },
  { key: 4, title: 'Итальянский' },
  { key: 5, title: 'Вечная классика' },
  { key: 6, title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {goodsList.map(item => (
                <li key={item.key} className={style.item}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}